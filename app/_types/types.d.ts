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
  video: false
  vote_average: number
  vote_count: number
}