import { Link } from 'react-router-dom'

import { StyledHeader } from './StyledHeader'

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">AnimeTrailers</Link>
    </StyledHeader>
  )
}
