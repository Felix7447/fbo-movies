import React from 'react'
import styles from '@/styles/mainSlider.module.scss'
import MainSliderComponent from '../_components/MainSliderComponent'
import { options } from '../_config/fetchOptions'

const getData = async (url: string) => {
  try {
    await setTimeout(() => {
      console.log('loading');  
    }, 5000)
    const res = await fetch(url, options)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const MainSlider = async ({ endpoint }: { endpoint: string }) => {
  const data = await getData(endpoint)

  return (
    <section className={styles.container}>
      <MainSliderComponent data={data} />
    </section>
  )
}

export default MainSlider