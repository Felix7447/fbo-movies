"use client"
import React, { useState } from 'react'
import styles from '@/styles/addButton.module.scss'
import PlusIcon from '../_icons/PlusIcon'
import { endpoints } from '../_config/endpoints'
import { addFavOptions } from '../_config/fetchOptions'
import CheckedIcon from '../_icons/CheckedIcon'
import TrashIcon from '../_icons/TrashIcon'
import { usePathname } from 'next/navigation'

interface Props {
  body: {
    media_type: string,
    media_id: number
  }
}

const AddButton = ({ body }: Props) => {

  const [isFav, setIsFav] = useState<string | null>(sessionStorage.getItem(body.media_id.toString()))

  const addToFavorites = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    event.stopPropagation()

    let favorite: boolean = !isFav ? true : false

    fetch(endpoints.addFavorite, addFavOptions(body, favorite))
      .then(res => {
        if (favorite) {
          window.sessionStorage.setItem(body.media_id.toString(), body.media_type)
          setIsFav(body.media_id.toString())
        }

        if (!favorite) {
          window.sessionStorage.removeItem(body.media_id.toString())
          setIsFav(null)
        }
        
      })
      .catch(err => console.error('error:' + err));
  }

  const pathname = usePathname()
  const removeIcon = pathname.includes('account') ? <TrashIcon/> : <CheckedIcon />

  return (
    <button className={styles.add_button} onClick={addToFavorites}>
      {
        isFav ?
        (
          removeIcon
        ) : (
          <PlusIcon />
        )
      }
    </button>
  )
}

export default AddButton