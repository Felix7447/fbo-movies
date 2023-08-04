"use client"
import React from 'react'
import styles from '@/styles/specialMovie.module.scss'
import Image from 'next/image'
import useGetMovies from '../_hooks/useGetMovies'
import { options } from '../_config/fetchOptions'
import { serieById } from '../_config/fetchById'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SpecialSerieContainer = ({ serieID }: { serieID: number }) => {
  const { data } = useGetMovies(serieById(serieID), options)
  console.log(data);
  
  return (
    <section className={styles.container}>
      <aside className={styles.aside}>
        <h1>{data.name}</h1>
        <p>{data.overview}</p>
      </aside>
      <picture className={styles.picture}>
        <Image
          src={`${IMAGE_URL}${data.backdrop_path}`} 
          alt={`special-serie-${data.id}`} 
          fill
          priority
        />
      </picture>
    </section>
  )
}

export default SpecialSerieContainer