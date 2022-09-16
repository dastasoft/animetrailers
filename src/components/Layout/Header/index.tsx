import { Link } from 'react-router-dom'

import { Logo } from './Logo'
import LogoHead from './LogoHead'
import SearchIcon from './SearchIcon'
import { StyledHeader } from './StyledHeader'

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo>
          <LogoHead />
          <span>|</span>
          <h1>AnimeTrailers</h1>
        </Logo>
      </Link>
      <Link to="/search">
        <SearchIcon width="30px" height="30px" fill="#FFE99C" />
      </Link>
    </StyledHeader>
  )
}
