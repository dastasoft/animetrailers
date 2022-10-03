import { useContext } from 'react'

import AnimeGrid from '../components/AnimeGrid'
import SEO from '../components/SEO'
import { ContainerBg } from '../components/shared/ContainerBg'
import { Liner } from '../components/shared/Liner'
import { RootContainer } from '../components/shared/RootContainer'
import Heading from '../components/UI/Heading'
import Text from '../components/UI/Text'
import { FavContext } from '../context/FavContext'

export default function Favorites() {
  const { favList } = useContext(FavContext)

  return (
    <div>
      <SEO />
      <ContainerBg />
      <RootContainer>
        {favList && favList.length > 0 ? (
          <>
            <Heading size="4xl" variant="secondary" as="h2">
              Favorites
            </Heading>
            <Liner />
            <AnimeGrid animeList={favList} />
          </>
        ) : (
          <Text>No favorites yet!</Text>
        )}
      </RootContainer>
    </div>
  )
}
