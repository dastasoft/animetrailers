import { Anime, RawAnimeData } from '../types'
import api from './api'

const API_ENDPOINT = 'https://api.jikan.moe'
const API_VERSION = 4

type JikanAPI = {
  data: RawAnimeData[]
}

function transformData(rawData: RawAnimeData): Anime {
  return {
    id: rawData.mal_id,
    coverURL: rawData.images.jpg.image_url,
    title: rawData.title,
  }
}

async function getTopAnime() {
  const { data } = await api<JikanAPI>(
    `${API_ENDPOINT}/v${API_VERSION}/top/anime`
  )

  return data.map((anime) => transformData(anime))
}

export { getTopAnime }
