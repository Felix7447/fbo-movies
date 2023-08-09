import React from 'react'
import styles from "@/styles/page.module.scss"
import SearchContainer from '../_containers/SearchContainer'

const Search = () => {
  return (
    <main className={styles.main}>
      <SearchContainer />
    </main>
  )
}

export default Search