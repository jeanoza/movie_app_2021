import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function genreIdToText(genre_ids, genres) {
    const returnArray = [];
    genre_ids.forEach(genre_id => {
        genres.forEach(genre => {
            if (genre.id === genre_id) {
                returnArray.push(genre.name);
            }
        })
    });
    return returnArray;
}
function Movie({ date, title, summary, poster_path, genre_ids, genres_category}) {
    const poster = `https://image.tmdb.org/t/p/w200/${poster_path}`;
    const genre_text = genreIdToText(genre_ids, genres_category);

    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__date">{date}</h5>
                <ul className="movie__genres">
                    {genre_text.map((genre,index)  =>
                        <li key={index} className="genres__genre">{genre}</li>
                )}</ul>
                <p className="movie__summary">{summary.slice(0,170)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Movie;