import React from 'react'
import styles from '@/styles/page.module.scss'
import MainSlider from '../_containers/MainSliderContainer'
import TopMoviesContainer from '../_containers/TopMoviesContainer'
import MoviesContainer from '../_containers/MoviesContainer'
import NowPlayingMovies from '../_containers/NowPlayingMovies'
import { endpoints } from '../_config/endpoints'

const Movies = () => {
  return (
    <section className={styles.main}>
      <MainSlider endpoint={endpoints.discoverMovies} />
      <NowPlayingMovies />
      <MoviesContainer />
      <TopMoviesContainer />
    </section>
  )
}

export default Movies