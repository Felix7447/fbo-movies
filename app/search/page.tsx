import React from 'react'
import styles from "@/styles/page.module.scss"
import SearchContainer from '../_containers/SearchContainer'

const Search = () => {
  return (
    <section className={styles.main}>
      <SearchContainer />
    </section>
  )
}

export default Search