import { ContainerBg } from '../../shared/ContainerBg'

type CoverProps = {
  url: string
}

export default function Cover({ url }: CoverProps) {
  return (
    <ContainerBg>
      <img
        src={url}
        alt=""
        width="100%"
        height="100%"
        style={{ objectFit: 'contain' }}
      />
    </ContainerBg>
  )
}
