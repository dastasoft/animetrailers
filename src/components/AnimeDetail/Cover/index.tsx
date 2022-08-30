import { ImageContainer } from './ImageContainer'

type CoverProps = {
  url: string
}

export default function Cover({ url }: CoverProps) {
  return (
    <ImageContainer>
      <img src={url} alt="" />
    </ImageContainer>
  )
}
