import "./css/Header.css";
import React, { useEffect } from "react";
import axios from "axios";
// import IframeComponent from "./Iframe";

export default function Header({ setModal, modal, setMovieId }) {
  const [movie, setMovie] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/550/recommendations?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US`
      )
      .then((response) => setMovie(response.data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  const styles = {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1.1) 0%,
    rgba(0, 0, 0, 0) 100%), url(https://cdn.wallpapersafari.com/32/76/nW1pd6.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  };

  const handleClick = () => {
    setModal(!modal);
    setMovieId(movie.results[6]);
    console.log(movie.results[6]);
  };

  return movie ? (
    <div className="header">
      <div className="heroimg" style={styles}>
        <div className="hero-contents">
          <div className="hero-details">
            <h2>H</h2>
            <p> PELICULA</p>
          </div>

          <h1 className={isLoaded ? "hero-title-after" : "hero-title"}>
            {movie.results[6].original_title.toUpperCase()}
          </h1>
          <p
            className={isLoaded ? "hero-description-after" : "hero-description"}
          >
            Belive the unbelievable.
          </p>
          <button onClick={handleClick} class="hero-button">
            Más información
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1>Hola</h1>
  );
}
