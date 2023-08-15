"use client"
import React from 'react'
import styles from '@/styles/searchCardItem.module.scss'
import { Result, SearchResult } from '../_types/types'
import Image from 'next/image'
import AddButton from './AddButton'
import Link from 'next/link'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SearchCardItem = ({ info }: { info: Result | SearchResult }) => {
  let cardLink = ""
  let body = {
    media_type: "",
    media_id: info.id,
    favorite: false
  }

  if (info.title) {
    cardLink = `/movie/${info.id}`
    body.media_type = "movie"
  } else {
    cardLink = `/serie/${info.id}`
    body.media_type = "tv"
  }

  return (
    <Link href={cardLink} className={styles.grid_item}>
      <Image 
        src={`${IMAGE_URL}${info.poster_path}`} 
        alt={info.name || info.title || ""} 
        fill 
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <aside className={styles.info}>
        <h1>
          {
            (info?.title) ?
              info?.title
              : info?.name
          }
        </h1>
        <AddButton body={body} />
      </aside>
    </Link>
  )
}

export default SearchCardItem