import styled from 'styled-components'

type StyledSpacerProps = {
  spacing: number
  direction: 'row' | 'column'
}

export const StyledSpacer = styled.div<StyledSpacerProps>`
  margin: ${({ spacing, direction }) =>
    direction === 'row' ? `0 ${spacing}rem` : `${spacing}rem 0`};
`
