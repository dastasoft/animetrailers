/* eslint-disable no-undef */
import { useEffect, useReducer, useRef } from 'react'

import useSessionStorage from './useSessionStorage'

type State<T> = {
  data?: T
  loading: boolean
  error?: Error
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }

function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
  const [cache, setCache] = useSessionStorage<T>('cache', {} as T)

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false)

  const initialState: State<T> = {
    loading: true,
    error: undefined,
    data: undefined,
  }

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState }
      case 'fetched':
        return { ...initialState, data: action.payload, loading: false }
      case 'error':
        return { ...initialState, error: action.payload, loading: false }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return

    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: 'loading' })

      if (cache[url]) {
        dispatch({ type: 'fetched', payload: cache[url] })
        return
      }

      try {
        console.debug('hit from outside the cache', url)
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = (await response.json()) as T
        setCache({ ...cache, [url]: data })
        if (cancelRequest.current) return

        dispatch({ type: 'fetched', payload: data })
      } catch (error) {
        if (cancelRequest.current) return

        dispatch({ type: 'error', payload: error as Error })
      }
    }

    void fetchData()

    return () => {
      cancelRequest.current = true
    }
  }, [url])

  return state
}

export default useFetch
