import React from 'react'
import styles from '@/styles/addButton.module.scss'
import PlusIcon from '../_icons/PlusIcon'

const AddButton = () => {
  return (
    <button className={styles.add_button}>
      <PlusIcon />
    </button>
  )
}

export default AddButton