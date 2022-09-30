/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as CrunchyrollLogo } from '../../../../../public/images/crunchyroll-logo.svg'
import { ReactComponent as FunimationLogo } from '../../../../../public/images/funimation-logo.svg'
import { ReactComponent as NetflixLogo } from '../../../../../public/images/netflix-logo.svg'
import { ReactComponent as WebLogo } from '../../../../../public/images/web-logo.svg'

export default function Logo({ name }: { name: string }) {
  switch (name.toLowerCase()) {
    case 'funimation':
      return <FunimationLogo />
    case 'crunchyroll':
      return <CrunchyrollLogo />
    case 'netflix':
      return <NetflixLogo />
    default:
      return <WebLogo />
  }
}
