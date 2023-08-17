"use client"
import React from 'react'
import styles from '@/styles/mainSlider.module.scss'

import { Splide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import MainSlide from '../_components/MainSlide';

const MainSliderComponent = ({ data }) => {
  return (
    <Splide
        hasTrack={false}
        className={styles.splide}
        tag='nav'
        aria-label="Main Slider Movies"
        options={{
          autoplay: true,
          type: 'slide',
          rewind: true,
          speed: 1000,
          rewindSpeed: 1500,
          easing: 'ease',
          omitEnd: true
        }}
      >
        <SplideTrack className={styles.splide__track}>
        {
          data?.results?.slice(0, 7).map((movie) => (
            <MainSlide key={`trending-${movie.id}`} movie={movie}/>
          ))
        }
        </SplideTrack>
      </Splide>
  )
}

export default MainSliderComponent