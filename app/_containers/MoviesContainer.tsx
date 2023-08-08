"use client"
import React from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import { options } from '../_config/fetchOptions'
import MovieSliderComponent from '../_components/MovieSliderComponent'

const MoviesContainer = () => {
  const { data } = useGetData(endpoints.discoverMovies, options)

  const { results } = data
  
  return (
    <section className={styles.slider_container}>
      <h3 className={styles.slider_title}>Movies</h3>
      <MovieSliderComponent results={results} />
    </section>
  )
}

export default MoviesContainer