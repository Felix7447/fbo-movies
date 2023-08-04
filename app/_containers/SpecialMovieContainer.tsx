"use client"
import React from 'react'
import styles from '@/styles/specialMovie.module.scss'
import Image from 'next/image'
import useGetMovies from '../_hooks/useGetMovies'
import { options } from '../_config/fetchOptions'
import { movieById } from '../_config/fetchById'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SpecialMovieContainer = ({ movieID }: { movieID: number}) => {
  const { data } = useGetMovies(movieById(movieID), options)
  
  return (
    <section className={styles.container}>
      <aside className={styles.aside}>
        <h1>{data.title}</h1>
        <p>{data.overview}</p>
      </aside>
      <picture className={styles.picture}>
        <Image
          src={`${IMAGE_URL}${data.backdrop_path}`} 
          alt={`special-movie-${data.id}`} 
          fill
          priority
        />
      </picture>
    </section>
  )
}

export default SpecialMovieContainer