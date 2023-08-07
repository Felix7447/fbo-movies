import React from 'react'
import styles from '@/styles/searchCardItem.module.scss'
import { Result, SearchResult } from '../_types/types'
import Image from 'next/image'
import AddButton from './AddButton'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SearchCardItem = ({ info }: { info: Result | SearchResult }) => {
  return (
    <main className={styles.grid_item}>
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
        <AddButton />
      </aside>
    </main>
  )
}

export default SearchCardItem