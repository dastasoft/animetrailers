import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-auto-rows: minmax(20rem, 1fr);
  grid-gap: 2.5rem 1.5rem;
`
