import React, { useEffect, useState } from 'react'
import { Search, Options } from '../_types/types'

const INITIAL_STATE = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

const useGetDataBySearch = (url: string, options: Options) => {
  const [searchData, setSearchData] = useState<Search>(INITIAL_STATE)

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setSearchData(data))
      .catch(err => console.log(err))
  }, [url])

  return {
    searchData
  }
}

export default useGetDataBySearch