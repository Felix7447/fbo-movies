import React from 'react'
import styles from '@/styles/page.module.scss'
import MainSlider from '../_containers/MainSlider'
import TopMoviesContainer from '../_containers/TopMoviesContainer'
import MoviesContainer from '../_containers/MoviesContainer'
import { endpoints } from '../_config/endpoints'
import NowPlayingMovies from '../_containers/NowPlayingMovies'

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