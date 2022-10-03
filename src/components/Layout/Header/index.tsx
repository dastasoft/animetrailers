import { Link } from 'react-router-dom'

/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Heart } from '../../../assets/heart-solid.svg'
import { Flexer } from '../../shared/Flexer'
import Heading from '../../UI/Heading'
import Spacer from '../../UI/Spacer'
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
          <Heading as="h1" variant="primary" size="3xl">
            AnimeTrailers
          </Heading>
        </Logo>
      </Link>
      <Flexer>
        <Link to="/favorites">
          <Heart width="30px" height="30px" fill="tomato" />
        </Link>
        <Spacer direction="row" spacing={0.8} />
        <Link to="/search">
          <SearchIcon width="30px" height="30px" fill="#FFE99C" />
        </Link>
      </Flexer>
    </StyledHeader>
  )
}
