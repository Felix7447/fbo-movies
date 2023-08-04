const API_URL = process.env.NEXT_PUBLIC_API_URL

export const movieById = (id: number) => (`${API_URL}movie/${id}?language=en-US`)
export const serieById = (id: number) => (`${API_URL}tv/${id}?language=en-US`)