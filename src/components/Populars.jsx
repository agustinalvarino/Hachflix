import React, { useEffect } from "react";
import "./css/Carrousel.css";
import axios from "axios";
import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Routes, Route, Link } from "react-router-dom";

export default function Populars({
  responsive,
  modal,
  setModal,
  movieId,
  setMovieId,
}) {
  const [movies, setMovies] = React.useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US&page=1`
      )
      .then((response) => setMovies(response.data));
  }, []);

  return movies ? (
    <div id="populars" className="carrousel-container">
      <h3 className="title">Populares en Hackflix</h3>
      <Carousel
        transitionDuration={500}
        infinite={true}
        responsive={responsive}
      >
        {movies.results.map((movie) => {
          const handleClick = () => {
            setModal((prevModal) => !prevModal);
            setMovieId(movie);
          };
          return (
            <div className="carrousel" key={movie.id}>
              <Link
                to={`/pelicula/${movie.id}`}
                key={movie.id}
                className="movieLink"
              >
                <img
                  className="poster w-100"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                ></img>
              </Link>
              <div className="box">
                <p class="movieTitle">{movie.original_title}</p>
                <button onClick={handleClick} class="modalBoton">
                  v
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  ) : null;
}
