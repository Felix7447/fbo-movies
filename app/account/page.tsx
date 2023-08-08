import React from 'react'
import styles from '@/styles/page.module.scss'
import account_styles from '@/styles/accountPage.module.scss'
import ProfileCircle from '../_components/ProfileCircle'

const Account = () => {
  return (
    <section className={styles.main}>
      <main className={account_styles.account_main}>
        <article>
          <ProfileCircle />
        </article>
      </main>
      <article className={account_styles.article}>
        <h2>My list</h2>
        <footer>
        </footer>
      </article>
    </section>
  )
}

export default Account