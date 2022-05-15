import React from 'react'
import Movie from './Movie'
import SortByRating from './SortByRating'
import SortByAlpha from './SortByAlpha'

export default function Movies(props) {

  // Returnerar listan med filmer samt knappar för att kunna sortera
  return (
    <div>
        <h2 className="mt-3">Inlagda filmer</h2>

        <ul className='list-group'>
            {props.movieList.map(movie => <Movie key={movie.id} item={movie} deleteMovie={props.deleteMovie}  />)}
        </ul>

        <SortByAlpha movies={props.movieList} setMovies={props.setMovies} />
        <SortByRating movies={props.movieList} setMovies={props.setMovies} />
     </div>
  )
}