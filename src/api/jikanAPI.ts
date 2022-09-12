import { Anime, Promo } from '../types'

const API_ENDPOINT = 'https://api.jikan.moe'
const API_VERSION = 4
const NSFW_ENABLED = false

type RawImageData = {
  image_url: string
  small_image_url: string
  medium_image_url?: string
  large_image_url: string
  maximum_image_url?: string
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
  streaming: {
    name: string
    url: string
  }[]
}

export type RawPromoData = {
  entry: {
    mal_id: number
    images: {
      jpg: RawImageData
      webp: RawImageData
    }
    title: string
  }
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
    images: RawImageData
  }
}

export type JikanAPIResponse<T> = {
  pagination: {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
  }
  data: T
}

export const getTopAnime = (page: number = 1, limit: number = 6) =>
  `${API_ENDPOINT}/v${API_VERSION}/top/anime?page=${page}&limit=${limit}`

export const getAnimeFullById = (id: number) =>
  `${API_ENDPOINT}/v${API_VERSION}/anime/${id}/full`

export const getAnimeById = (id: number) =>
  `${API_ENDPOINT}/v${API_VERSION}/anime/${id}`

export const getWatchRecentPromos = () =>
  `${API_ENDPOINT}/v${API_VERSION}/watch/promos`

export const getAnimeByName = (name: string = 'One Piece') =>
  `${API_ENDPOINT}/v${API_VERSION}/anime?q=${name}&${
    NSFW_ENABLED ? 'nsfw' : 'sfw'
  }`

export function parseRawAnimeData(rawData: RawAnimeData): Anime {
  return {
    id: rawData.mal_id,
    coverURL: rawData.images.jpg.image_url,
    title: rawData.title,
    largeImageURL: rawData.images.jpg.large_image_url,
    videoURL: rawData.trailer.embed_url
      ? rawData.trailer.embed_url.replace('autoplay=1', 'autoplay=0')
      : '',
    episodeCount: rawData.episodes,
    status: rawData.status,
    synopsis: rawData.synopsis,
    genres: rawData.genres.map(({ name }: { name: string }) => name),
    streaming: rawData.streaming,
  }
}

export function parseRawPromoData(rawData: RawPromoData): Promo {
  return {
    id: rawData.entry.mal_id,
    title: rawData.entry.title,
    coverURL: rawData.trailer.images.large_image_url,
    videoURL: rawData.trailer.embed_url,
  }
}
