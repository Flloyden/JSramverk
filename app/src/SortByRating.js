import React from 'react'

export default function SortByGrade(props) {

    function sortMovies() {
      /**
      * Sorterar listan genom betyg på filmen
      */
      let sortedMovieList = props.movies.sort((a, b) => b.rating - a.rating);
      props.setMovies(Array.from(sortedMovieList))
    }

  // Returnerar knappen för sortering i alfabetisk ordning
  return (
    <button className="btn btn-primary mt-2 ms-1" onClick={sortMovies}>Betygsordning</button>
  )
}