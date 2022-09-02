export type Anime = {
  id: number
  coverURL: string
  title: string
  videoURL?: string
  largeImageURL: string
  episodeCount: number
  status: string
  synopsis: string
  genres: string[]
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
