import styled from 'styled-components'

export const Cover = styled.img`
  cursor: pointer;
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (min-width: 35em) {
    max-height: 300px;
  }

  @media screen and (min-width: 41em) {
    max-height: 290px;
  }

  @media screen and (min-width: 55em) {
    max-height: 290px;
  }
`
