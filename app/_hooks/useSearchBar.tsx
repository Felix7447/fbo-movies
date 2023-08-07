import React, { useState } from 'react'

const useSearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("")

  const handleSearch = (string: string) => {
    setSearchValue(string)
  }

  return {
    searchValue,
    handleSearch
  }
}

export default useSearchBar