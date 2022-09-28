import { Link } from 'react-router-dom'

import Heading from '../../UI/Heading'
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
          <Heading as="h1" size="3xl">
            AnimeTrailers
          </Heading>
        </Logo>
      </Link>
      <Link to="/search">
        <SearchIcon width="30px" height="30px" fill="#FFE99C" />
      </Link>
    </StyledHeader>
  )
}
