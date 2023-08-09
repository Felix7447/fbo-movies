import React from 'react'
import page from '@/styles/page.module.scss'
import styles from '@/styles/categoryPage.module.scss'
import { options } from '@/app/_config/fetchOptions'
import { Movies } from '@/app/_types/types'
import SearchCardItem from '@/app/_components/SearchCardItem'
import { MenuRoutes } from '@/app/_config/MenuRoutes'
import MovieSliderComponent from '@/app/_components/MovieSliderComponent'
import SerieSliderComponent from '@/app/_components/SerieSliderComponent'

interface Props {
  params: {
    route: string
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return MenuRoutes.map((route) => (
    { route: route.route }
  ))
}

const getData = async (endpoint: string) => {
  try {
    const res = await fetch(endpoint, options)
    const data: Promise<Movies> = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const Category = async ({ params }: Props) => {

  const { title, endpoint, mediaType } = MenuRoutes.filter((route) => route.route === params.route).pop() || {}
  const data = await getData(endpoint || "")

  return (
    <main className={page.main}>
      <section className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <main className={styles.slider_container}>
          {
            mediaType === 'movie' ?
              (
                <MovieSliderComponent results={data?.results || []}/>
              ) : (
                <SerieSliderComponent results={data?.results || []}/>
              )
          }
        </main>
        <div className={styles.grid}>
          {
            data?.results.map((result) => (
              <SearchCardItem key={`category-${result.id}`} info={result}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Category