/* eslint-disable react/display-name */
import { forwardRef, Ref } from 'react'

import { Flexer } from '../../shared/Flexer'
import Heading from '../../UI/Heading'
import Text from '../../UI/Text'
import { Bottom } from './Bottom'
import { Container } from './Container'
import { StyledCard } from './StyledCard'

type CardProps = {
  id: number
  coverURL: string
  title: string
  status: string
  score: number
  type: 'TV' | 'Movie'
  year: number
}

const Card = forwardRef(
  (
    { id, coverURL, title, status, score, type, year }: CardProps,
    ref: Ref<HTMLImageElement>
  ) => {
    return (
      <Container to={`/animes/${id}/${title}`}>
        <StyledCard role="button" aria-hidden>
          <img src={coverURL} alt={`${title} cover`} ref={ref} />
        </StyledCard>
        <Bottom>
          <Heading as="h2" size="xl">
            {title}
          </Heading>
          <Flexer>
            <div>
              <Text as="span" size="md">
                {type === 'TV' ? '📺' : '🎥'} -
              </Text>{' '}
              <Text as="span" size="md" color="#FF681A">
                {score} Score
              </Text>{' '}
              <Text as="span" size="md">
                - {status}
              </Text>
            </div>
            <Text as="span" size="md">
              {year}
            </Text>
          </Flexer>
        </Bottom>
      </Container>
    )
  }
)

export default Card
