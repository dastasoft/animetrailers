import { Anime, RawAnimeData } from '../types'
import api from './api'

const API_ENDPOINT = 'https://api.jikan.moe'
const API_VERSION = 4

type JikanAPI = {
  data: RawAnimeData | RawAnimeData[]
}

function transformData(rawData: RawAnimeData): Anime {
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

async function getTopAnime() {
  const { data } = await api<JikanAPI>(
    `${API_ENDPOINT}/v${API_VERSION}/top/anime`
  )

  return (data as RawAnimeData[]).map((anime) => transformData(anime))
}

async function getAnimeById(id: number) {
  const { data } = await api<JikanAPI>(
    `${API_ENDPOINT}/v${API_VERSION}/anime/${id}/full`
  )

  return [transformData(data as RawAnimeData)]
}

export { getAnimeById, getTopAnime }
