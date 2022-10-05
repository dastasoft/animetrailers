import styled from 'styled-components'

type StyledHStackProps = {
  spacing: number
}

export const StyledHStack = styled.div<StyledHStackProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  > * {
    margin-right: ${({ spacing }) => `${spacing}rem`};
  }

  > *:last-of-type {
    margin-right: 0;
  }
`
