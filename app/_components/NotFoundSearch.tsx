import React from 'react'
import styles from "@/styles/notFoundSearch.module.scss"

const NotFoundSearch = ({ search }: { search: string }) => {
  return (
    <h3 className={styles.not_found}>
      Sorry we couldn&apos;t find movies or series for the search: &quot;{search}&quot;
    </h3>
  )
}

export default NotFoundSearch