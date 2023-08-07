import React from 'react'
import styles from '@/styles/searchBar.module.scss'

const SearchBar = () => {
  return (
    <form action="">
      <input type='search' placeholder='Search...'  className={styles.input} />
    </form>
  )
}

export default SearchBar