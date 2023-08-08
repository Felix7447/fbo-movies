const API_URL = process.env.NEXT_PUBLIC_API_URL

export const singleMovie = (query: string) => `${API_URL}movie/${query}?language=en-US`
export const singleSerie = (query: string) => `${API_URL}tv/${query}?language=en-US`
