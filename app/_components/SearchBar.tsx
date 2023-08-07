import React, { useRef } from 'react'
import styles from '@/styles/searchBar.module.scss'

interface Props {
  handleSearch: (string: string) => void
}

const SearchBar: React.FC<Props> = ({ handleSearch }) => {
  const search = useRef(null)
  let timeout: NodeJS.Timeout | null = null

  const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      handleSearch(event.target.value)  
    }, 1000)
  }

  return (
    <form action="">
      <input ref={search} type='search' placeholder='Search...'  className={styles.input} onInput={handleTyping}/>
    </form>
  )
}

export default SearchBar