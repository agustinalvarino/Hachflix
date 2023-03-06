import React, { useEffect } from "react";
import "./css/Carrousel.css";
import axios from "axios";
import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Hollywood({ responsive }) {
  const [movies, setMovies] = React.useState(null);

  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/497/recommendations?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US`
      )
      .then((response) => setMovies(response.data));
  }, []);

  return movies ? (
    <div className="carrousel-container">
      <h3>De Hollywood a tu pantalla</h3>
      <Carousel
        transitionDuration={500}
        infinite={true}
        responsive={responsive}
      >
        {movies.results.map((movie) => {
          return (
            <div className="carrousel" key={movie.id}>
              <h6 className="movie-title">{movie.original_title}</h6>
              <img
                className="img-fluid poster"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt=""
              ></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  ) : null;
}
