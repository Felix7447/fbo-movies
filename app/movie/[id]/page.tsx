import React from 'react'
import styles from "@/styles/singlePage.module.scss"
import { singleMovie } from '@/app/_config/fetchSingleData'
import { options } from '@/app/_config/fetchOptions'
import { MovieByID } from '@/app/_types/types'
import MainSingleMovie from '@/app/_components/MainSingleMovie'

interface Props {
  params: { id: string }
}

const getMovie = async (id: string) => {
  const res = await fetch(singleMovie(id), options)
  const data: Promise<MovieByID> = res.json()
  return data
}

const Movie = async ({ params }: Props) => {
  const movie = await getMovie(params.id)

  return (
    <section className={styles.section}>
      <MainSingleMovie movie={movie}/>
    </section>
  )
}

export default Movie