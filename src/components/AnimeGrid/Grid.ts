import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 2.5rem 1rem;

  @media screen and (min-width: 35em) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media screen and (min-width: 41em) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  @media screen and (min-width: 55em) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }

  @media screen and (min-width: 70em) {
    grid-template-columns: repeat(5, minmax(200px, 1fr));
  }
`
