import { Helmet } from 'react-helmet'

import { CONSTANTS } from '../../constants'

export default function SEO() {
  return (
    <Helmet>
      <title>{CONSTANTS.TITLE}</title>
      <meta name="description" content={CONSTANTS.DESCRIPTION} />
      <link rel="canonical" href={CONSTANTS.URL} />
      <meta property="og:image" content={CONSTANTS.IMAGE} />
      <meta property="og:title" content={CONSTANTS.TITLE} />
      <meta property="og:description" content={CONSTANTS.DESCRIPTION} />
      <meta property="og:url" content={CONSTANTS.URL} />
      <meta property="og:image:height" content="200" />
      <meta property="og:image:width" content="200" />
      <meta property="og:locale" content="en" />
    </Helmet>
  )
}
