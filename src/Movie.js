import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
function Title() {
  return <h1>MINFLIX</h1>;
}

function Movie({ year, rating, title, summary, genres, poster }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} className="movie__poster" />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <div className="row__tings">
          <h5 className="movie__year">{year}</h5>
          <h5 className="movie__rating">rating: {rating}</h5>
        </div>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 300)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
