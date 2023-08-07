export interface Options {
  method: string,
  headers: {
    accept: string,
    Authorization: string
  }
}

export interface Movies {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieByID {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: any,
  budget: number,
  genres: Genre[],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: Production_company[],
  production_countries: Production_country[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: Spoken_language[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface SerieById {
  adult: boolean,
  backdrop_path: string,
  created_by: createdBy[],
  episode_run_time: number[],
  first_air_date: string,
  genres: Genre[],
  homepage: string,
  id: number,
  in_production: boolean,
  languages: any[],
  last_air_date: string,
  last_episode_to_air: {
    [key: string]: number | string | null
  },
  name: string,
  next_episode_to_air: null,
  networks: any[],
  number_of_episodes: number,
  number_of_seasons: number,
  origin_country: string[],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: Production_company[],
  production_countries: Production_country[],
  seasons: Season[],
  spoken_languages: Spoken_language[],
  status: string,
  tagline: string,
  type: string,
  vote_average: number,
  vote_count: number
}

interface Genre {
  id: number
  name: string
}

interface Production_company {
  id: number,
  logo_path: null,
  name: string,
  origin_country: string 
}

interface Production_country {
  iso_3166_1: string
  name: string
}

interface Spoken_language {
  english_name: string,
  iso_639_1: string,
  name: string
}

interface Season {
  air_date: string,
  episode_count: number,
  id: number,
  name: string,
  overview: string,
  poster_path: null,
  season_number: number,
  vote_average: number
}

interface createdBy {
  id: 0,
  credit_id: string,
  name: string,
  gender: number,
  profile_path: null
}
