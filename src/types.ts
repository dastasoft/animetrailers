export type AnimeType = 'TV' | 'Movie'

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
  type: AnimeType
  videoURL?: string
  year: number
  votes: number
  streaming?: Array<{
    name: string
    url: string
  }>
}

export type Promo = {
  id: number
  title: string
  coverURL: string
  videoURL: string
}
