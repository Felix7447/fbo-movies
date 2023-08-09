import React from 'react'
import styles from '@/styles/mainSlide.module.scss'
import mainSingle from "@/styles/mainSingle.module.scss"
import Image from 'next/image'
import { MovieByID } from '../_types/types'
import AddButton from './AddButton'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const MainSingleMovie = ({ movie }: { movie: MovieByID }) => {

  let movieBody = {
    media_type: "movie",
    media_id: movie.id
  }

  return (
    <main className={styles.splide_slide}>
      <Image src={`${IMAGE_URL}${movie.backdrop_path}`} alt={`movie-${movie.id}`} fill priority />
      <div className={styles.splide__info_container}></div>
      <aside className={mainSingle.info}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <b>Tagline: {movie.tagline}</b>
        <i>Status: {movie.status}</i>
        <AddButton body={movieBody}/>
      </aside>
    </main>
  )
}

export default MainSingleMovie