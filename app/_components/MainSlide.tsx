"use client"
import React from 'react'
import styles from '@/styles/mainSlide.module.scss'
import Image from 'next/image';
import { SplideSlide } from '@splidejs/react-splide';
import { Result } from '../_types/types';
import Link from 'next/link';

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const MainSlide = ({ movie }: { movie: Result }) => {  
  let mediaType = movie.title ? 'movie' : 'serie'
  
  return (
    <SplideSlide className={styles.splide_slide}>
      <Image 
        src={`${IMAGE_URL}${movie.backdrop_path}`} 
        alt={`movie-${movie.id}`} 
        fill 
        priority 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Link href={`/${mediaType}/${movie.id}`} className={styles.splide__info_container}>
        <aside className={styles.splide__info}>
          <h2>
            {
              (movie.title) ? movie.title : movie?.name
            }
          </h2>
          <p>Release Date: {movie.release_date}</p>
          <p>{movie.overview.slice(0, 100)}...</p>
          <button className={styles.info__button}>More Info</button>
        </aside>
      </Link>
    </SplideSlide>
  )
}

export default MainSlide