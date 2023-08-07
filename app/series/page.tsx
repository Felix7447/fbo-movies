import React from 'react'
import styles from '@/styles/page.module.scss'
import MainSlider from '../_containers/MainSlider'
import { endpoints } from '../_config/endpoints'
import AiringTodayContainer from '../_containers/AiringTodayContainer'
import SeriesContainer from '../_containers/SeriesContainer'
import TopSeriesContainer from '../_containers/TopSeriesContainer'

const Series = () => {
  return (
    <section className={styles.main}>
      <MainSlider endpoint={endpoints.discoverSeries} />
      <AiringTodayContainer />
      <SeriesContainer />
      <TopSeriesContainer />
    </section>
  )
}

export default Series