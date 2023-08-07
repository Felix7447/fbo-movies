"use client"
import React from 'react'
import styles from '@/styles/searchContainer.module.scss'
import SearchBar from '../_components/SearchBar'
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import { options } from '../_config/fetchOptions'
import SearchCardItem from '../_components/SearchCardItem'

const SearchContainer = () => {
  const { data } = useGetData(endpoints.trending, options)

  const { results } = data 

  return (
    <section className={styles.container}>
      <SearchBar />
      <main>
        <h3>All movies & series</h3>
        <div className={styles.grid}>
          {
            results.map((result) => (
              <SearchCardItem key={`search-discover--${result?.id}`} info={result}/>
            ))
          }
        </div>
      </main>
    </section>
  )
}

export default SearchContainer