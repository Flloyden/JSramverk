import React from 'react'

export default function sortByAlpha(props) {

  function sortMovies() {
    /**
    * Sorterar listan genom alfabetisk ordning
    */
    let sortedItems = props.movies.sort((a,b) => a.title.localeCompare(b.title))
    props.setMovies(Array.from(sortedItems))
  }

  // Returnerar knappen för sortering i alfabetisk ordning
  return (
    <button className="btn btn-primary mt-2 ms-1" onClick={sortMovies}>Alfabetisk ordning</button>
  )
}