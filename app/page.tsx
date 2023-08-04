import styles from '@/styles/page.module.scss'
import Header from './_components/Header'
import MainSlider from './_containers/MainSlider'
import MoviesContainer from './_containers/MoviesContainer'
import SeriesContainer from './_containers/SeriesContainer'
import TopMoviesContainer from './_containers/TopMoviesContainer'
import TopSeriesContainer from './_containers/TopSeriesContainer'
import AiringTodayContainer from './_containers/AiringTodayContainer'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MainSlider />
      <MoviesContainer />
      <SeriesContainer />
      <TopMoviesContainer />
      <TopSeriesContainer />
      <AiringTodayContainer />
      <Footer />
    </main>
  )
}
