import React, {useState, useRef} from "react";
import Movies from "./Movies";
import SaveMovie from "./SaveMovie";

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    // Hämtar input från formuläret
    const movieTitle = useRef();
    const movieRating = useRef();

    function deleteMovie(id) {
        /**
         * Tar bort en film från listan
         */
        setMovies(movies.filter((item) => item.id !== id))
    }

    // Returnerar formuläret
    return (
        <div>
            <form id="add-movie-form">
                <fieldset>
                    <legend>Lägg till en film</legend>

                    <label htmlFor="title-field">Titel:</label>
                    <input type="text" id="title-field" className="form-control" ref={movieTitle} />

                    <label htmlFor="rating-field" className="mt-3">Betyg:</label>

                    <select type="text" id="rating-field" className="form-control" ref={movieRating}>
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <SaveMovie movieTitle={movieTitle} movieRating={movieRating} movieList={movies} setMovies={setMovies}/>
                </fieldset>
            </form>

            <Movies movieList={movies} setMovies={setMovies} deleteMovie={deleteMovie}/>
        </div>
    )
}