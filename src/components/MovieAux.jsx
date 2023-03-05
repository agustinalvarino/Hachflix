import React, { useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Movie({ movieId }) {
  const [movie, setMovie] = React.useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=7fd94ee7a2b7d02794d136b5214c3516`
      )
      .then((response) => setMovie(response.data));
  }, []);
  return movie ? (
    <>
      <div className="movie-item m-1">
        <div className="movie-image">
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          ></img>
        </div>
      </div>
    </>
  ) : (
    <h1>Hola</h1>
  );
}
