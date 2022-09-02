import { useEffect, useState } from 'react'

import {
  getWatchRecentPromos,
  JikanAPIResponse,
  parseRawPromoData,
  RawPromoData,
} from '../../api/jikanAPI'
import useFetch from '../../hooks/useFetch'
import { Promo } from '../../types'

export default function Carousel() {
  const [promos, setPromos] = useState<Promo[] | null>(null)
  const { data, loading, error } = useFetch<JikanAPIResponse<RawPromoData[]>>(
    getWatchRecentPromos()
  )

  useEffect(() => {
    setPromos(
      data ? data.data.map((rawPromo) => parseRawPromoData(rawPromo)) : null
    )
  }, [data])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    promos && (
      <div>
        <img src={promos[0].coverURL} alt="" width="100%" />
      </div>
    )
  )
}
