"use client"
import React from 'react'
import styles from '@/styles/special.module.scss'
import Image from 'next/image'
import useGetSerieByID from "../_hooks/useGetSerieByID"
import { options } from '../_config/fetchOptions'
import { serieById } from '../_config/fetchById'
import { useRouter } from 'next/navigation'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SpecialSerieContainer = ({ serieID }: { serieID: number }) => {
  const router = useRouter()
  const { serie } = useGetSerieByID(serieById(serieID), options)
  
  const handleButton = () => {
    router.push(`/serie/${serieID}`)
  }

  return (
    <section className={styles.container}>
      <aside className={styles.aside}>
        <h1>{serie.name}</h1>
        <p>{serie.overview}</p>
        <button className={styles.info_button} onClick={handleButton}>
          More Info
        </button>
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