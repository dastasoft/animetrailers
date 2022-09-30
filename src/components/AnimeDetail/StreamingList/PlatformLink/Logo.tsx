/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as CrunchyrollLogo } from '../../../../assets/crunchyroll-logo.svg'
import { ReactComponent as FunimationLogo } from '../../../../assets/funimation-logo.svg'
import { ReactComponent as NetflixLogo } from '../../../../assets/netflix-logo.svg'
import { ReactComponent as WebLogo } from '../../../../assets/web-logo.svg'

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
