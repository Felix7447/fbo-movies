"use client"
import React from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import { options } from '../_config/fetchOptions'
import SerieSliderComponent from '../_components/SerieSliderComponent'
import EmptyList from '../_components/EmptyList'

const FavoriteSeriesContainer = () => {
  const { data } = useGetData(endpoints.favoriteSeries, options)

  const { results } = data
  
  return (
    <section className={styles.slider_container}>
      <h3>Favorite Series</h3>
      {
        results.length > 0 ?
        (
          <SerieSliderComponent results={results} />
        ) : (
          <EmptyList/>
        )
      }
    </section>
  )
}

export default FavoriteSeriesContainer