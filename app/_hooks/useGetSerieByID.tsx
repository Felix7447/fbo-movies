import React, { useEffect, useState } from 'react'
import { Options, SerieById } from '../_types/types'

const INITIAL_STATE = {
  adult: false,
  backdrop_path: "",
  created_by: [],
  episode_run_time: [],
  first_air_date: "",
  genres: [],
  homepage: "",
  id: 0,
  in_production: false,
  languages: [],
  last_air_date: "",
  last_episode_to_air: {},
  name: "",
  next_episode_to_air: null,
  networks: [],
  number_of_episodes: 0,
  number_of_seasons: 0,
  origin_country: [],
  original_language: "",
  original_name: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  seasons: [],
  spoken_languages: [],
  status: "",
  tagline: "",
  type: "",
  vote_average: 0,
  vote_count: 0
}

const useGetSerieByID = (url: string, options: Options) => {
  const [serie, setSerie] = useState<SerieById>(INITIAL_STATE)

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setSerie(data))
  }, [url, options])

  return {
    serie
  }
}

export default useGetSerieByID