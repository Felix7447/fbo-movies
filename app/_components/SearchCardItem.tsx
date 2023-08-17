"use client"
import React, { useRef } from 'react'
import styles from '@/styles/searchCardItem.module.scss'
import { Result, SearchResult } from '../_types/types'
import Image from 'next/image'
import AddButton from './AddButton'
import Link from 'next/link'
import useIntersectionObserver from '../_hooks/useIntersectionObserver'

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

  const slider = useRef<HTMLAnchorElement | null>(null)
  const isVisible = useIntersectionObserver(slider)

  return (
    <Link ref={slider} href={cardLink} className={styles.grid_item}>
      {
      isVisible && 
      <>
        <Image 
          src={`${IMAGE_URL}${info.poster_path}`} 
          alt={info.name || info.title || ""} 
          fill 
          priority
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
      </>
      }
    </Link>
  )
}

export default SearchCardItem