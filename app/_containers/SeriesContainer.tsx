"use client"
import React from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import SerieSliderComponent from '../_components/SerieSliderComponent'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
}

const SeriesContainer = () => {
  const { data } = useGetData(endpoints.discoverSeries, OPTIONS)

  const { results } = data
  
  return (
    <section className={styles.slider_container}>
      <h3 className={styles.slider_title}>Series</h3>
      <SerieSliderComponent results={results} />
    </section>
  )
}

export default SeriesContainer