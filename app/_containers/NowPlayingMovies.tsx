"use client"
import React from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import SliderComponent from '../_components/SliderComponent'
import { options } from '../_config/fetchOptions'

const NowPlayingMovies = () => {
  const { data } = useGetData(endpoints.nowPlayingMovies, options)

  const { results } = data
  
  return (
    <section className={styles.slider_container}>
      <h3 className={styles.slider_title}>Now Playing</h3>
      <SliderComponent results={results} />
    </section>
  )
}

export default NowPlayingMovies