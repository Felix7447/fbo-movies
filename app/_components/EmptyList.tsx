import React from 'react'
import styles from '@/styles/emptyList.module.scss'

const EmptyList = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.empty}>Empty List</h4>
    </div>
  )
}

export default EmptyList