/*
  функция выполняет поиск одного любого параметра элемента по массиву
*/
export function movieFilter(
  movies: Array<object>,
  query: string | number = '',
  isShort: boolean = false
) {
  const shortDuration: number = 60
  return movies.filter(
    (movie: any) =>
      JSON.stringify(movie)
        .toLocaleLowerCase()
        .match(query.toString().toLocaleLowerCase()) &&
      (isShort ? movie?.duration < shortDuration : true)
  )
}
