"use client"
import React, { useRef } from 'react'
import styles from '@/styles/special.module.scss'
import Image from 'next/image'
import useGetMovieByID from '../_hooks/useGetMovieByID'
import { options } from '../_config/fetchOptions'
import { movieById } from '../_config/fetchById'
import { useRouter } from 'next/navigation'
import useIntersectionObserver from '../_hooks/useIntersectionObserver'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SpecialMovieContainer = ({ movieID }: { movieID: number}) => {
  const slider = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(slider)
  
  const router = useRouter()
  const { movie } = useGetMovieByID(movieById(movieID), options)
  
  const handleButton = () => {
    router.push(`/movie/${movieID}`)
  }

  return (
    <section ref={slider} className={styles.container}>
      {isVisible &&
        <>
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
        </>
      }
    </section>
  )
}

export default SpecialMovieContainer