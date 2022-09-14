import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  getWatchRecentPromos,
  JikanAPIResponse,
  parseRawPromoData,
  RawPromoData,
} from '../../api/jikanAPI'
import useFetch from '../../hooks/useFetch'
import { Promo } from '../../types'
import { Image } from './Image'

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
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        autoplay
        navigation
        pagination
      >
        {promos.map(({ id, coverURL, title }, index) => {
          return (
            <SwiperSlide key={`${id}-${index}`}>
              <Link to={`/animes/${id}/${title}`}>
                <Image src={coverURL} alt={title} />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  )
}
