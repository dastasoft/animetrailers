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

type Options = {
  initialFetch: boolean
  delayFetch?: number
}

function useFetch<T = unknown>(
  url?: string,
  { initialFetch, delayFetch }: Options = { initialFetch: true, delayFetch: 0 }
): State<T> {
  const [cache, setCache] = useSessionStorage<T>('cache', {} as T)

  const isFirstRun = useRef(true)
  const cancelRequest = useRef(false)

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

  const initialState: State<T> = {
    loading: true,
    error: undefined,
    data: undefined,
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (isFirstRun.current && !initialFetch) {
      isFirstRun.current = false
      return
    }

    if (isFirstRun.current) isFirstRun.current = false

    if (!url) return

    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: 'loading' })

      if (cache[url]) {
        dispatch({ type: 'fetched', payload: cache[url] })
        return
      }

      try {
        const response = await fetch(url)
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

    const timeoutId = setTimeout(() => fetchData(), delayFetch)

    return () => {
      cancelRequest.current = true
      clearTimeout(timeoutId)
    }
  }, [delayFetch, initialFetch, url])

  return state
}

export default useFetch
