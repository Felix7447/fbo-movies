"use client"
import React from 'react'
import styles from '@/styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className='watch-options'>
          <button>menu</button>
          <a href="movies">movies</a>
          <a href="series">series</a>
        </div>
        <div className='main-logo'>
          <h1 className={styles.title}>
            FBO/MOVIES
          </h1>
        </div>
        <div className='account-options'>
          <button>Search</button>
          <button>Account</button>
        </div>
      </nav>
    </header>
  )
}

export default Header