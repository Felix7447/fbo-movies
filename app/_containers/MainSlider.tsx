"use client"
import React from 'react'
import styles from '@/styles/mainSlider.module.scss'

import { Splide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import useGetMovies from '../_hooks/useGetMovies';
import { endpoints } from '../_config/endpoints';
import MainSlide from '../_components/MainSlide';


const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
}


const MainSlider = () => {
  const { data } = useGetMovies(endpoints.trending, OPTIONS)

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