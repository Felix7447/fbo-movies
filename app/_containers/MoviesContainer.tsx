"use client"
import React from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetMovies from '../_hooks/useGetMovies'
import { endpoints } from '../_config/endpoints'
import SliderComponent from '../_components/SliderComponent'
import { options } from '../_config/fetchOptions'

const MoviesContainer = () => {
  const { data } = useGetMovies(endpoints.discoverMovies, options)

  const { results } = data
  
  return (
    <section className={styles.slider_container}>
      <h3 className={styles.slider_title}>Movies</h3>
      <SliderComponent results={results} />
    </section>
  )
}

export default MoviesContainer