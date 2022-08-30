import { Heading } from '../../shared/Heading'
import { Bottom } from './Bottom'
import { Container } from './Container'
import { StyledCard } from './StyledCard'

type CardProps = {
  id: number
  coverURL: string
  title: string
}

export default function Card({ id, coverURL, title }: CardProps) {
  return (
    <Container to={`/animes/${id}/${title}`}>
      <StyledCard role="button" aria-hidden>
        <img src={coverURL} alt={`${title} cover`} />
      </StyledCard>
      <Bottom>
        <Heading as="h2">{title}</Heading>
      </Bottom>
    </Container>
  )
}
