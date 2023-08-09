"use client"
import React from 'react'
import Link from 'next/link'
import styles from '@/styles/title.module.scss'
import { montserrat } from '../fonts'


const Title = () => {
  return (
    <Link href={"/"} className={styles.title_link}>
      <h1 className={styles.title}>
        FBO <span className={montserrat.className}>MOVIES</span>
      </h1>
    </Link>
  )
}

export default Title