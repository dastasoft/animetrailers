/* eslint-disable @typescript-eslint/no-dynamic-delete */
/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useState } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import { AnimeType } from '../types'

export interface Favorite {
  id: number
  coverURL: string
  title: string
  status: string
  score: number
  type: AnimeType
  year: number
}

interface FavContextType {
  favList: Favorite[]
  // setFavList: React.Dispatch<React.SetStateAction<Favorite[]>>
  toggleFav: (id: number, favorite: Favorite) => void
}

interface FavContextProviderProps {
  children: ReactNode
}

export const FavContext = createContext({} as FavContextType)

export const FavContextProvider = ({ children }: FavContextProviderProps) => {
  const [storage, setStorage] = useLocalStorage<Favorite>(
    'favorites',
    {} as Favorite
  )
  const [favList, setFavList] = useState<Favorite[]>(Object.values(storage))

  const toggleFav = (id: number, favorite: Favorite) => {
    const liked = favList?.find((fav) => fav.id === id) != null

    if (liked) {
      setFavList((prevValue) => prevValue.filter((fav) => fav.id !== id))
      const _storage = { ...storage }
      delete _storage[id]
      setStorage(_storage)
    } else {
      setFavList((prevValue) => [...prevValue, favorite])
      setStorage({ ...storage, [id]: favorite })
    }
  }

  return (
    <FavContext.Provider value={{ favList, toggleFav }}>
      {children}
    </FavContext.Provider>
  )
}
