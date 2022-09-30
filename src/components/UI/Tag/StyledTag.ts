import styled, { css } from 'styled-components'

type StyledTagProps = {
  variant?: 'solid' | 'outlined'
}

export const StyledTag = styled.span<StyledTagProps>`
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  background-color: transparent;
  color: black;

  ${({ variant }) => {
    if (variant === 'solid') {
      return css`
        background-color: #ff681a;
        border: 1px solid #ff681a;
      `
    }

    if (variant === 'outlined') {
      return css`
        background-color: transparent;
        border: 1px solid #ff681a;
      `
    }
  }};
`
