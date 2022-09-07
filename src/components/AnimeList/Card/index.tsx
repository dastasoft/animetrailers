/* eslint-disable react/display-name */
import { forwardRef, Ref } from 'react'

import { Heading } from '../../shared/Heading'
import { Bottom } from './Bottom'
import { Container } from './Container'
import { StyledCard } from './StyledCard'

type CardProps = {
  id: number
  coverURL: string
  title: string
}

const Card = forwardRef(
  ({ id, coverURL, title }: CardProps, ref: Ref<HTMLImageElement>) => {
    return (
      <Container to={`/animes/${id}/${title}`}>
        <StyledCard role="button" aria-hidden>
          <img src={coverURL} alt={`${title} cover`} ref={ref} />
        </StyledCard>
        <Bottom>
          <Heading as="h2">{title}</Heading>
        </Bottom>
      </Container>
    )
  }
)

export default Card
