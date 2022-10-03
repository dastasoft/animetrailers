import styled from 'styled-components'

export const Position = styled.div`
  position: relative;

  > :last-child {
    position: absolute;
    top: 1px;
    right: 3px;
  }
`
