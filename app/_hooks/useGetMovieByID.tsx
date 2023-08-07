import React, { useEffect, useState } from 'react'
import { MovieByID, Options } from '../_types/types'

const INITIAL_STATE = {
  adult: false,
  backdrop_path: "",
  belongs_to_collection: null,
  budget: 0,
  genres: [],
  homepage: "",
  id: 0,
  imdb_id: "",
  original_language: "",
  original_title: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  release_date: "",
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: "",
  tagline: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0
}

const useGetMovieByID = (url: string, options: Options) => {
  const [movie, setMovie] = useState<MovieByID>(INITIAL_STATE)

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setMovie(data))
  }, [url, options])

  return {
    movie
  }
}

export default useGetMovieByID