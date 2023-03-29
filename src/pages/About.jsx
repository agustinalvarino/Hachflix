import "../components/css/Header.css";
import React, { useEffect } from "react";
import axios from "axios";
import agustin from "../img/agustin.jpg";
import { Link } from "react-router-dom";
// import IframeComponent from "./Iframe";

export default function About({ setModal, modal, setMovieId }) {
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
            <p> HACKFLIX</p>
          </div>

          <h1 className={isLoaded ? "hero-title-after" : "hero-title"}>
            ABOUT THIS PROJECT
          </h1>
          <p
            className={isLoaded ? "hero-description-after" : "hero-description"}
          >
            Educational project.
          </p>
          <p>
            The Hackflix project was created for the Hack Academy institute for
            educational purposes. It was created by Agustin Alvariño in a period
            of three days.{" "}
          </p>
          <p>
            The objective of this project was to deepen the knowledge of
            React.js and take the first steps in using APIs. At the same time,
            Node.js was used to complete the functionalities of the web
            application.
          </p>
          <div className="info-container d-flex">
            <img className="w-25 rounded" alt="agustin" src={agustin}></img>
            <div className="ms-3">
              <h3 className="">Agustín Alvariño</h3>
              <p
                className={
                  isLoaded ? "hero-description-after" : "hero-description"
                }
              >
                FULLSTACK JR DEVELOPER
              </p>
              <div className="botones">
                <Link to="https://www.linkedin.com/in/agustin-alvarino-alonso/">
                  <button onClick={handleClick} class="hero-button mb-1">
                    LinkedIn
                  </button>
                </Link>
                <Link to="https://github.com/agustinalvarino">
                  <button onClick={handleClick} class=" black">
                    GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
