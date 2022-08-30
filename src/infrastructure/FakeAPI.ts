import fakeAPI from '../assets/fakeAPI.json'

function transformData(rawData: any) {
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

function getTopAnime() {
  const data = fakeAPI.topAnime.sort((a, b) => b.score - a.score)

  if (!data || data.length === 0) throw Error()

  return data.map((anime) => transformData(anime))
}

function getAnimeById(id: number) {
  const data = fakeAPI.fullAnime.find(({ mal_id }) => mal_id === id)

  if (!data) throw Error()

  return [transformData(data)]
}

export { getAnimeById, getTopAnime }
