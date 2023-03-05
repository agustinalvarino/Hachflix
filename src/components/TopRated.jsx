import React, { useEffect } from "react";
import "./css/Carrousel.css";
import axios from "axios";
import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Toprated({ responsive }) {
  const [movies, setMovies] = React.useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US&page=1`
      )
      .then((response) => setMovies(response.data));
  }, []);

  return movies ? (
    <div className="carrousel-container">
      <h3>Aclamadas por la crítica</h3>
      <Carousel
        transitionDuration={500}
        infinite={true}
        responsive={responsive}
      >
        {movies.results.map((movie) => {
          return (
            <div className="carrousel" key={movie.id}>
              <img
                className="img-fluid poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              ></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  ) : (
    <h1>Chau</h1>
  );
}
