"use client"
import React, { useRef } from 'react'
import styles from "@/styles/containerSlider.module.scss"
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import SerieSliderComponent from '../_components/SerieSliderComponent'
import useIntersectionObserver from '../_hooks/useIntersectionObserver'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
}

const AiringTodayContainer = () => {
  const slider = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(slider)
  const { data } = useGetData(endpoints.airingTodaySeries, OPTIONS)

  const { results } = data
  
  return (
    <section ref={slider} className={styles.slider_container}>
      <h3 className={styles.slider_title}>Airing Today Series</h3>
      {isVisible && <SerieSliderComponent results={results} />}
    </section>
  )
}

export default AiringTodayContainer