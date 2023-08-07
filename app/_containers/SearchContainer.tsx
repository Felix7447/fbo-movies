"use client"
import React from 'react'
import styles from '@/styles/searchContainer.module.scss'
import SearchBar from '../_components/SearchBar'
import useGetData from '../_hooks/useGetData'
import { endpoints } from '../_config/endpoints'
import { options } from '../_config/fetchOptions'
import SearchCardItem from '../_components/SearchCardItem'
import useSearchBar from '../_hooks/useSearchBar'
import useGetDataBySearch from '../_hooks/useGetDataBySearch'
import { multiSearch } from '../_config/fetchSearch'
import NotFoundSearch from '../_components/NotFoundSearch'

const SearchContainer = () => {
  const { data } = useGetData(endpoints.trending, options)
  const { results } = data 

  const { searchValue, handleSearch } = useSearchBar()
  
  const { searchData } = useGetDataBySearch(multiSearch(searchValue), options)
  const filterResults = searchData.results.filter((result) => result.media_type === ('tv' || 'movie'))

  return (
    <section className={styles.container}>
      <SearchBar handleSearch={handleSearch} />
      <main>
        <h3>All movies & series</h3>
        <div className={styles.grid}>
          {
            searchValue.length > 1 ? 
            (
              filterResults.length > 0 ?
                (
                  filterResults.map((result) => (
                    <SearchCardItem key={`search-discover--${result?.id}`} info={result}/>
                  ))
                ) : (
                  <NotFoundSearch key={`not-found`} search={searchValue}/>
                )
            ) : (
              results.map((result) => (
                <SearchCardItem key={`none-search--${result?.id}`} info={result}/>
              ))
            )
          }
        </div>
      </main>
    </section>
  )
}

export default SearchContainer