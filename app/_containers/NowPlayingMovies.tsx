"use client"
import React, { useRef } from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import { options } from '../_config/fetchOptions'
import MovieSliderComponent from '../_components/MovieSliderComponent'
import useIntersectionObserver from '../_hooks/useIntersectionObserver'

const NowPlayingMovies = () => {
  const slider = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(slider)
  const { data } = useGetData(endpoints.nowPlayingMovies, options)

  const { results } = data
  
  return (
    <section ref={slider} className={styles.slider_container}>
      <h3 className={styles.slider_title}>Now Playing</h3>
      {isVisible && <MovieSliderComponent results={results} />}
    </section>
  )
}

export default NowPlayingMovies