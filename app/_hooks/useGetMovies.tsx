import React, { useState, useEffect } from 'react'

const useGetMovies = (url: string, options: any) => {

  const [movies, setMovies] = useState({})

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovies(json))
      .catch(err => console.error('error:' + err));
  }, [])

  return {
    movies
  }
}

export default useGetMovies