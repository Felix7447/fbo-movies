import React from 'react'
import styles from "@/styles/slider.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import { SplideSlide } from '@splidejs/react-splide'
import AddButton from './AddButton'
import { Result, SearchResult } from '../_types/types'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SlideComponent = ({ info }: { info: Result | SearchResult }) => {
  let cardLink = ""
  let body = {
    media_type: "",
    media_id: info.id,
    favorite: false
  }

  if (info.title) {
    cardLink = `/movie/${info.id}`
    body.media_type = "movie"
  } else {
    cardLink = `/serie/${info.id}`
    body.media_type = "tv"
  }

  return (
    <SplideSlide className={styles.slide}>
      <Link className={styles.slide_link} href={cardLink}>
        <Image className={styles.slide_image} src={`${IMAGE_URL}${info.poster_path}`} alt={`slider-${info.id}`} fill priority sizes='auto' />
        <AddButton body={body} />
      </Link>
    </SplideSlide>
  )
}

export default SlideComponent