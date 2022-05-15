import React from 'react';
import './Movie.css';

export default function Movie(props) {

    // Lägger till en stjärna beroende på rating
    const stars = [];
    for (var i = 0; i < props.item.rating; i++) {
        stars.push(<img src="images/star.png" alt="star" />)
    }

  return (
    // Skapar en film med rätt komponenter
    <li className='list-group-item' data-grade={props.item.rating} data-title={props.item.title}>
        { props.item.title }
        <img src="images/delete.png" alt="Delete movie" className="delete-movie-icon" onClick={() => {props.deleteMovie(props.item.id )}} />
        { stars }
    </li>
  )
}