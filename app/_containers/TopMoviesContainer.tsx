"use client"
import React, { useRef } from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import MovieSliderComponent from '../_components/MovieSliderComponent'
import useIntersectionObserver from '../_hooks/useIntersectionObserver'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
}

const TopMoviesContainer = () => {
  const slider = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(slider)
  const { data } = useGetData(endpoints.topRatedMovies, OPTIONS)

  const { results } = data
  
  return (
    <section ref={slider} className={styles.slider_container}>
      <h3 className={styles.slider_title}>Top Rated Movies</h3>
      {isVisible && <MovieSliderComponent results={results} />}
    </section>
  )
}

export default TopMoviesContainer