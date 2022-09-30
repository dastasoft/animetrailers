import AnimeList from '../components/AnimeList'
import Carousel from '../components/Carousel'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div>
      <SEO />
      <Carousel />
      <AnimeList />
    </div>
  )
}
