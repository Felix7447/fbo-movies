"use client"
import React from 'react'
import styles from "@/styles/slider.module.scss"
import { Splide, SplideTrack } from '@splidejs/react-splide'
import { Result } from '../_types/types'
import SlideComponent from './SlideComponent'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SerieSliderComponent = ({ results }: { results: Result[] }) => {
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
          results?.map((serie) => (
            <SlideComponent key={`serie-${serie.id}`} info={serie}/>
          ))
        }
      </SplideTrack>
    </Splide>
  )
}

export default SerieSliderComponent