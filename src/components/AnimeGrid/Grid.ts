import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) repeat(
      auto-fill,
      minmax(250px, 1fr)
    );
  grid-gap: 2.5rem 1rem;
`
