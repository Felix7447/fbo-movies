import React from 'react'
import styles from '@/styles/footer.module.scss'
import YTIcon from '../_icons/YTIcon'
import TwitterIcon from '../_icons/TwitterIcon'
import FacebookIcon from '../_icons/FacebookIcon'
import InstagramIcon from '../_icons/InstagramIcon'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <main className={styles.main}>
        <article className={styles.icons}>
          <YTIcon />
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
        </article>
        <article>
          © 2023 FBO Movies. Todos los derechos reservados.
        </article>
      </main>
    </footer>
  )
}

export default Footer