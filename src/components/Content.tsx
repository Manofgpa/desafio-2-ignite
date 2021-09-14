import { MovieCard } from './MovieCard'

interface Content {
  movies: Array<{
    imdbID: string
    Title: string
    Poster: string
    Ratings: Array<{
      Source: string
      Value: string
    }>
    Runtime: string
  }>
}

export function Content(props: Content) {
  const { movies } = props
  return (
    <main>
      <div className='movies-list'>
        {movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  )
}
