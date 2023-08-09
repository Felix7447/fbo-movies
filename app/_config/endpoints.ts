const API_URL = process.env.NEXT_PUBLIC_API_URL
const ACCOUNT_ID = process.env.NEXT_PUBLIC_ACCOUNT_ID

export const endpoints = {
  trending: `${API_URL}trending/all/day?language=en-US`,
  topRatedMovies: `${API_URL}movie/top_rated?language=en-US&page=1`,
  discoverMovies: `${API_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  nowPlayingMovies: `${API_URL}movie/now_playing?language=en-US&page=1`,
  discoverSeries: `${API_URL}discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
  topRatedSeries: `${API_URL}tv/top_rated?language=en-US&page=1`,
  airingTodaySeries: `${API_URL}tv/airing_today?language=en-US&page=1`,
  addFavorite: `${API_URL}account/${ACCOUNT_ID}/favorite`,
  favoriteMovies: `${API_URL}account/${ACCOUNT_ID}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
  favoriteSeries: `${API_URL}account/${ACCOUNT_ID}/favorite/tv?language=en-US&page=1&sort_by=created_at.asc`,
}