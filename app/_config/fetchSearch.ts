const API_URL = process.env.NEXT_PUBLIC_API_URL

export const multiSearch = (query: string) => `${API_URL}search/multi?query=${query}&include_adult=false&language=en-US`
