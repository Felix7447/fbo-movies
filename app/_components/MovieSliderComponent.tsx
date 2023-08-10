"use client"
import React from 'react'
import styles from "@/styles/slider.module.scss"
import { Splide, SplideTrack } from '@splidejs/react-splide'
import { Result } from '../_types/types'
import SlideComponent from './SlideComponent'

const MovieSliderComponent = ({ results }: { results: Result[] }) => {
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
            <SlideComponent key={`movie-${movie.id}`} info={movie}/>
          ))
        }
      </SplideTrack>
    </Splide>
  )
}

export default MovieSliderComponent