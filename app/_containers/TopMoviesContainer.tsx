"use client"
import React from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetMovies from '../_hooks/useGetMovies'
import { endpoints } from '../_config/endpoints'
import SliderComponent from '../_components/SliderComponent'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
}

const TopMoviesContainer = () => {
  const { data } = useGetMovies(endpoints.topRatedMovies, OPTIONS)

  const { results } = data
  
  return (
    <section className={styles.slider_container}>
      <h3 className={styles.slider_title}>Top Rated Movies</h3>
      <SliderComponent results={results} />
    </section>
  )
}

export default TopMoviesContainer