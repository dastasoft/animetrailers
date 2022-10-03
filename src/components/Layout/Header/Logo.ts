import styled from 'styled-components'

export const Logo = styled.div`
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;

  svg {
    width: 90px;
    height: 100px;
    fill: var(--primary);
  }

  span {
    margin-right: 1rem;
  }
`
