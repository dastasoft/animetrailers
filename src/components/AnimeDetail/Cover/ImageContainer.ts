import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
