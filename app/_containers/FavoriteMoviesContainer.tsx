"use client"
import React from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import { options } from '../_config/fetchOptions'
import MovieSliderComponent from '../_components/MovieSliderComponent'

const FavoriteMoviesContainer = () => {
  const { data } = useGetData(endpoints.favoriteMovies, options)

  const { results } = data
  
  return (
    <section className={styles.slider_container}>
      <h3>Favorite Movies</h3>
      {
        results.length > 0 ?
        (
          <MovieSliderComponent results={results} />
        ) : (
          "Empty List"
        )
      }
    </section>
  )
}

export default FavoriteMoviesContainer