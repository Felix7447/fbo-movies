import styles from '@/styles/page.module.scss'
import Header from './_components/Header'
import MainSlider from './_containers/MainSlider'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MainSlider/>
    </main>
  )
}
