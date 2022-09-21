export type Anime = {
  coverURL: string
  episodeCount: number
  genres: string[]
  id: number
  largeImageURL: string
  score: number
  status: string
  synopsis: string
  title: string
  type: 'TV' | 'Movie'
  videoURL?: string
  year: number
  streaming?: {
    name: string
    url: string
  }[]
}

export type Promo = {
  id: number
  title: string
  coverURL: string
  videoURL: string
}
