import styled from 'styled-components'

export const Link = styled.a`
  background: var(--bg);
  border: 2px solid #000000;
  border-radius: 3px;
  color: black;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  height: 50px;

  :hover {
    background: var(--secondary);
  }

  svg {
    height: 100%;
    width: 30px;
  }

  span {
    margin: 0 0.2rem 0 0.5rem;
    display: block;
  }
`
