import { endpoints } from "./endpoints";

export const menuRoutes = [
  {
    route: 'top-rated-movies',
    title: 'Top Rated Movies',
    endpoint: endpoints.topRatedMovies,
    mediaType: 'movie'
  },
  {
    route: 'airing-today-series',
    title: 'Airing Today Series',
    endpoint: endpoints.airingTodaySeries,
    mediaType: 'serie'
  }
]