"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/styles/addButton.module.scss'
import PlusIcon from '../_icons/PlusIcon'
import { endpoints } from '../_config/endpoints'
import { addFavOptions, removeFavOptions } from '../_config/fetchOptions'
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

  const [isFav, setIsFav] = useState(sessionStorage.getItem(body.media_id.toString()))


  const addToFavorites = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    event.stopPropagation()

    fetch(endpoints.addFavorite, addFavOptions(body))
      .then(res => {
        window.sessionStorage.setItem(body.media_id.toString(), body.media_type)
        setIsFav(body.media_id.toString())
      })
      .catch(err => console.error('error:' + err));
  }


  const removeFromFavorites = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    event.stopPropagation()

    fetch(endpoints.addFavorite, removeFavOptions(body))
      .then(res => {
        window.sessionStorage.removeItem(body.media_id.toString())
        setIsFav(null)
      })
      .catch(err => console.error('error:' + err));
  }


  const eventHandler = isFav ? removeFromFavorites : addToFavorites

  const pathname = usePathname()
  const removeIcon = pathname.includes('account') ? <TrashIcon/> : <CheckedIcon />

  return (
    <button className={styles.add_button} onClick={eventHandler}>
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