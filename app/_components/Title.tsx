"use client"
import React from 'react'
import Link from 'next/link'
import styles from '@/styles/title.module.scss'
import { montserrat } from '../fonts'


const Title = ({ relative }: { relative?: boolean }) => {
  return (
    <Link href={"/"} className={relative ? `${styles.title_link}${styles.title_relative}` : `${styles.title_link}`}>
      <h1 className={styles.title}>
        FBO <span className={montserrat.className}>MOVIES</span>
      </h1>
    </Link>
  )
}

export default Title