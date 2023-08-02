"use client"
import React from 'react'
import styles from '@/styles/mainSlider.module.scss'
import Image from 'next/image';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import useGetMovies from '../_hooks/useGetMovies';

const URL_API = process.env.NEXT_PUBLIC_API_URL || ""
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN
const IMAGE_URL = "http://image.tmdb.org/t/p/original"

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
}
const MainSlider = () => {
  const { movies } = useGetMovies(`${URL_API}movie/top_rated?language=en-US&page=1`, OPTIONS)
  console.log(movies);

  const { results } = movies
  
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
            <SplideSlide key={`movie-${movie.id}`} className={styles.splide_slide}>
              <Image src={`${IMAGE_URL}${movie.backdrop_path}`} alt={`movie-${movie.id}`} fill />
              <article className={styles.splide__info}>
                <aside>
                  <h2>{movie?.title}</h2>
                  <p>Release Date: {movie.release_date}</p>
                  <p>{movie.overview.slice(0, 100)}...</p>
                  <button className={styles.info__button}>More Info</button>
                </aside>
              </article>
            </SplideSlide>
          ))
        }
        </SplideTrack>
      </Splide>
    </section>
  )
}

export default MainSlider