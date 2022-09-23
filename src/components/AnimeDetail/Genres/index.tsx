import HStack from '../../UI/HStack'
import Tag from '../../UI/Tag'

type GenresProps = {
  genres: string[]
}

export default function Genres({ genres }: GenresProps) {
  return (
    <HStack spacing={0.5}>
      {genres.map((genre) => {
        return <Tag key={genre} text={genre} />
      })}
    </HStack>
  )
}
