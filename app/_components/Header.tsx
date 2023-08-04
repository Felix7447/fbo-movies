"use client"
import React, { useRef, useEffect } from 'react'
import styles from '@/styles/header.module.scss'

import BurgerMenuIcon from '../_icons/BurgerMenuIcon'
import AccountIcon from '../_icons/AccountIcon'
import SearchIcon from '../_icons/SearchIcon'

import { montserrat } from '../fonts'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const header = useRef<HTMLElement>(null)

  const changeBackground = () => {
    if (window.scrollY > 300) {
      if (header.current) {
        header.current.style.background = "rgba(15, 15, 15, 0.98)"
      }
    } else {
      if (header.current) {
        header.current.style.background = "" 
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)

    return () => window.removeEventListener('scroll', changeBackground)
  })


  return (
    <header ref={header} className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.watch_options}>
          <button className={styles.menu_button}>
            <BurgerMenuIcon />
          </button>
          <a href="movies">movies</a>
          <a href="series">series</a>
        </div>
        <Link href={"/"} className='main-logo'>
          <h1 className={styles.title}>
            FBO <span className={montserrat.className}>MOVIES</span>
          </h1>
        </Link>
        <div className={styles.account_options}>
          <button className={styles.menu_button} onClick={() => router.push('/search')}>
            <SearchIcon />
          </button>
          <button className={styles.menu_button} onClick={() => router.push('/account')}>
            <AccountIcon />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header