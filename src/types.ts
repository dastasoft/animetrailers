export type Anime = {
  id: number
  coverURL: string
  title: string
}

type RawImageData = {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export type RawAnimeData = {
  mal_id: number
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
  }
  images: {
    jpg: RawImageData
    webp: RawImageData
  }
  title: string
  episodes: number
  status: string
  synopsis: string
  genres: {
    name: string
  }[]
}
