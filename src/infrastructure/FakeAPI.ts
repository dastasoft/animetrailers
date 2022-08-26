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
  }
}

async function getTopAnime() {
  const data = fakeAPI.data.sort((a, b) => b.score - a.score)

  return data.map((anime) => transformData(anime))
}

export { getTopAnime }
