"use client"
import React from 'react'
import styles from '@/styles/special.module.scss'
import Image from 'next/image'
import useGetMovieByID from '../_hooks/useGetMovieByID'
import { options } from '../_config/fetchOptions'
import { movieById } from '../_config/fetchById'
import { useRouter } from 'next/navigation'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SpecialMovieContainer = ({ movieID }: { movieID: number}) => {
  const router = useRouter()
  const { movie } = useGetMovieByID(movieById(movieID), options)
  
  const handleButton = () => {
    router.push(`/movie/${movieID}`)
  }

  return (
    <section className={styles.container}>
      <aside className={styles.aside}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <button className={styles.info_button} onClick={handleButton}>
          More Info
        </button>
      </aside>
      <picture className={styles.picture}>
        <Image
          src={`${IMAGE_URL}${movie.backdrop_path}`} 
          alt={`special-movie-${movie.id}`} 
          fill
          priority
        />
      </picture>
    </section>
  )
}

export default SpecialMovieContainer