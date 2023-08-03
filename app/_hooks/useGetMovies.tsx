import React, { useState, useEffect } from 'react'

import { Options, Movies } from '../_types/types'

const useGetMovies = (url: string, options: Options) => {

  const INITIAL_STATE = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  }

  const [data, setData] = useState<Movies>(INITIAL_STATE)

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('error:' + err));
  }, [url, options])

  return {
    data
  }
}

export default useGetMovies