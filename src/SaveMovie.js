import React from 'react'

export default function SaveMovie(props) {

    function addMovie(e) {
        /**
        * Lägger till en film i listan om den uppfyller kraven
        */

        // Hindar formuläret att skickas iväg
        e.preventDefault();

        // Kollar om titel och betyg är angivet
        if (props.movieTitle.current.value <= 0) {
            window.alert("Ange titel")
        } else if (props.movieRating.current.value <= 0) {
            window.alert("Ange betyg")
        } else {
            // Get filmen ett nytt id om kraven uppfylls
            const newId = props.movieList.length > 0 ? props.movieList[props.movieList.length - 1].id + 1 : 1;

            // Lägger till filmen med rätt egenskaper
            props.setMovies([...props.movieList, {
                id: newId,
                title: props.movieTitle.current.value,
                rating: props.movieRating.current.value
            }]);

            // Tömmer inputen
            props.movieTitle.current.value = "";
            props.movieRating.current.value = "";
        }
    }

    // Returnerar knappen för att lägga till en film
  return (
    <button type="submit" className="btn btn-success mt-3" onClick={addMovie}>Spara film</button>
  )
}