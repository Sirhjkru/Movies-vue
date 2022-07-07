export interface IMoviesName {
  nameEN: string | number
  nameRU: string | number
}
export interface IMovieItem extends IMoviesName {
  director?: string
  duration: number
  country?: string
  description?: string
  image: {
    url: string
  }
  trailerLink?: string
  year: number
}

export interface IMoviesList {
  items: Array<object>
}