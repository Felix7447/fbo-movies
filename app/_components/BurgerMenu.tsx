"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "@/styles/burgerMenu.module.scss"
import BurgerMenuIcon from '../_icons/BurgerMenuIcon'
import CloseIcon from '../_icons/CloseIcon'
import Link from 'next/link'

const BurgerMenu = () => {  

  const [menuOpen, setMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    document.documentElement.style.overflow = 'hidden'
    setMenuOpen(true)
  }

  const handleCloseMenu = () => {
    document.documentElement.style.overflow = 'auto'
    setMenuOpen(false)
  }

  const navClass = (menuOpen) ? `${styles.menu} ${styles.menu_open}` : styles.menu
  const overlayClass = (menuOpen) ? styles.overlay : ""

  return (
    <>
      <button className={styles.menu_button} onClick={handleOpenMenu}>
        <BurgerMenuIcon />
      </button>
      <div className={overlayClass}></div>
      <nav className={navClass}>
        <button className={styles.menu_button} onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <ul className={styles.menu_list}>
          <li>
            <Link href="/" onClick={handleCloseMenu}>Home</Link>
          </li>
          <li>
            <Link href="/movies" onClick={handleCloseMenu}>Movies</Link>
          </li>
          <li>
            <Link href="/series" onClick={handleCloseMenu}>Series</Link>
          </li>
          <li>
            <Link href="/category/top-rated-movies" onClick={handleCloseMenu}>Top Rated Movies</Link>
          </li>
          <li>
            <Link href="/category/airing-today-series" onClick={handleCloseMenu}>Airing Today Series</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default BurgerMenu