const API_URL = process.env.NEXT_PUBLIC_API_URL

export const endpoints = {
  topRated: `${API_URL}movie/top_rated?language=en-US&page=1`
}