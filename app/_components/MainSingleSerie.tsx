import React from 'react'
import styles from '@/styles/mainSlide.module.scss'
import mainSingle from "@/styles/mainSingle.module.scss"
import Image from 'next/image'
import { SerieById } from '../_types/types'
import AddButton from './AddButton'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const MainSingleSerie = ({ serie }: { serie: SerieById }) => {

  let serieBody = {
    media_type: "tv",
    media_id: serie.id
  }

  return (
    <main className={styles.splide_slide}>
      <Image src={`${IMAGE_URL}${serie.backdrop_path}`} alt={`serie-${serie.id}`} fill priority />
      <div className={styles.splide__info_container}></div>
      <aside className={mainSingle.info}>
        <h2>{serie.name}</h2>
        <p>{serie.overview}</p>
        <b>Tagline: {serie.tagline}</b>
        <i>Status: {serie.status}</i>
        <AddButton body={serieBody} />
      </aside>
    </main>
  )
}

export default MainSingleSerie