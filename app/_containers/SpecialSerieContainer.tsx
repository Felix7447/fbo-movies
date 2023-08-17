"use client"
import React, { useRef } from 'react'
import styles from '@/styles/special.module.scss'
import Image from 'next/image'
import useGetSerieByID from "../_hooks/useGetSerieByID"
import { options } from '../_config/fetchOptions'
import { serieById } from '../_config/fetchById'
import { useRouter } from 'next/navigation'
import useIntersectionObserver from '../_hooks/useIntersectionObserver'

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const SpecialSerieContainer = ({ serieID }: { serieID: number }) => {
  const slider = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(slider)
  const router = useRouter()
  const { serie } = useGetSerieByID(serieById(serieID), options)
  
  const handleButton = () => {
    router.push(`/serie/${serieID}`)
  }

  return (
    <section ref={slider} className={styles.container}>
      {isVisible &&
        <>
          <aside className={styles.aside}>
            <h1>{serie.name}</h1>
            <p>{serie.overview}</p>
            <button className={styles.info_button} onClick={handleButton}>
              More Info
            </button>
          </aside>
          <picture className={styles.picture}>
            <Image
              src={`${IMAGE_URL}${serie.backdrop_path}`} 
              alt={`special-serie-${serie.id}`} 
              fill
              priority
            />
          </picture>
        </>
        }
    </section>
  )
}

export default SpecialSerieContainer