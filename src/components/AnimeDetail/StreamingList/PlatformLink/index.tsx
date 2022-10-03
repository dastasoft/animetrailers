import { Link } from './Link'
import Logo from './Logo'

interface PlatformLinkProps {
  name: string
  url?: string
}

export default function PlatformLink({ name, url }: PlatformLinkProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Logo name={name} />
      <span>{name}</span>
    </Link>
  )
}
