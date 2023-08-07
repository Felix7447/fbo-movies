"use client"
import React from 'react'
import styles from '@/styles/specialMovie.module.scss'
import Image from 'next/image'
import useGetSerieByID from "../_hooks/useGetSerieByID"
import { options } from '../_config/fetchOptions'
import { serieById } from '../_config/fetchById'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SpecialSerieContainer = ({ serieID }: { serieID: number }) => {
  const { serie } = useGetSerieByID(serieById(serieID), options)
  
  return (
    <section className={styles.container}>
      <aside className={styles.aside}>
        <h1>{serie.name}</h1>
        <p>{serie.overview}</p>
      </aside>
      <picture className={styles.picture}>
        <Image
          src={`${IMAGE_URL}${serie.backdrop_path}`} 
          alt={`special-serie-${serie.id}`} 
          fill
          priority
        />
      </picture>
    </section>
  )
}

export default SpecialSerieContainer