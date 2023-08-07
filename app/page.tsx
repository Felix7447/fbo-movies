import styles from '@/styles/page.module.scss'
import Header from './_components/Header'
import MainSlider from './_containers/MainSlider'
import MoviesContainer from './_containers/MoviesContainer'
import SeriesContainer from './_containers/SeriesContainer'
import TopMoviesContainer from './_containers/TopMoviesContainer'
import TopSeriesContainer from './_containers/TopSeriesContainer'
import AiringTodayContainer from './_containers/AiringTodayContainer'
import Footer from './_components/Footer'
import SpecialMovieContainer from './_containers/SpecialMovieContainer'
import SpecialSerieContainer from './_containers/SpecialSerieContainer'
import { endpoints } from './_config/endpoints'

const SPECIAL_MOVIE_ID = 346698
const SPECIAL_SERIE_ID = 72879

export default function Home() {
  return (
    <main className={styles.main}>
      <MainSlider endpoint={endpoints.trending} />
      <MoviesContainer />
      <SeriesContainer />
      <SpecialMovieContainer movieID={SPECIAL_MOVIE_ID}/>
      <TopMoviesContainer />
      <SpecialSerieContainer serieID={SPECIAL_SERIE_ID}/>
      <TopSeriesContainer />
      <AiringTodayContainer />
    </main>
  )
}
