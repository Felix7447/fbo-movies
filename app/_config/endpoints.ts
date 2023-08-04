const API_URL = process.env.NEXT_PUBLIC_API_URL

export const endpoints = {
  trending: `${API_URL}trending/all/day?language=en-US`,
  topRatedMovies: `${API_URL}movie/top_rated?language=en-US&page=1`,
  discoverMovies: `${API_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  nowPlayingMovies: `${API_URL}movie/now_playing?language=en-US&page=1`,
  discoverSeries: `${API_URL}discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
  topRatedSeries: `${API_URL}tv/top_rated?language=en-US&page=1`,
  airingTodaySeries: `${API_URL}tv/airing_today?language=en-US&page=1`,
}