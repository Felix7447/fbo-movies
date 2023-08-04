import React from 'react'
import styles from "@/styles/slider.module.scss"
import Image from 'next/image'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { Result } from '../_types/types'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SliderComponent = ({ results }: { results: Result[] }) => {
  return (
    <Splide
      className={styles.slider}
      hasTrack={false}
      tag='nav'
      aria-label="Slider Movies"
      options={{
        perPage: 4,
        type: 'slide',
        rewind: true,
        speed: 1000,
        rewindSpeed: 1500,
        easing: 'ease',
        breakpoints: {
          1000: {
            perPage: 3
          },
          680: {
            perPage: 2
          }
        }
      }}
    >
      <SplideTrack className={styles.slider_track}>
        {
          results?.map((movie) => (
            <SplideSlide key={`movie-${movie.id}`} className={styles.slide}>
              <Image className={styles.slide_image} src={`${IMAGE_URL}${movie.poster_path}`} alt={`movie-${movie.id}`} fill priority sizes='auto' />
            </SplideSlide>
          ))
        }
      </SplideTrack>
    </Splide>
  )
}

export default SliderComponent