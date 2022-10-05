/* eslint-disable no-unused-vars */
import { useEffect, useReducer, useRef } from 'react'

import useSessionStorage from './useSessionStorage'

const enum ACTIONS {
  LOADING,
  FETCHED,
  ERROR,
}

type State<T> = {
  data?: T
  loading: boolean
  error?: Error
}

type Action<T> =
  | { type: ACTIONS.LOADING }
  | { type: ACTIONS.FETCHED; payload: T }
  | { type: ACTIONS.ERROR; payload: Error }

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
      case ACTIONS.LOADING:
        return { ...initialState }
      case ACTIONS.FETCHED:
        return { ...initialState, data: action.payload, loading: false }
      case ACTIONS.ERROR:
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
      dispatch({ type: ACTIONS.LOADING })

      if (cache[url]) {
        dispatch({ type: ACTIONS.FETCHED, payload: cache[url] })
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

        dispatch({ type: ACTIONS.FETCHED, payload: data })
      } catch (error) {
        if (cancelRequest.current) return

        dispatch({ type: ACTIONS.ERROR, payload: error as Error })
      }
    }

    const timeoutId = setTimeout(async () => await fetchData(), delayFetch)

    return () => {
      cancelRequest.current = true
      clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayFetch, initialFetch, url])

  return state
}

export default useFetch
