"use client"
import React from 'react'
import styles from '@/styles/mainSlider.module.scss'

import { Splide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import useGetData from '../_hooks/useGetData';
import MainSlide from '../_components/MainSlide';
import { options } from '../_config/fetchOptions';

const MainSlider = ({ endpoint }: { endpoint: string }) => {
  const { data } = useGetData(endpoint, options)

  const { results } = data 
  
  return (
    <section className={styles.container}>
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
          results?.slice(0, 7).map((movie) => (
            <MainSlide key={`movie-${movie.id}`} movie={movie}/>
          ))
        }
        </SplideTrack>
      </Splide>
    </section>
  )
}

export default MainSlider