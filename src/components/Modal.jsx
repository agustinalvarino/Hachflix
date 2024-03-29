import React, { useEffect } from "react";
import "./css/Modal.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Modal({ modal, movieId, setModal }) {
  const [movies, setMovies] = React.useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US&page=1`
      )
      .then((response) => setMovies(response.data));
  }, []);

  const [relatedMovies, setRealtedMovies] = React.useState();
  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${movieId.id}/recommendations?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US`
      )
      .then((response) => setRealtedMovies(response.data));
  });

  const handleClick = () => {
    setModal(modal);
  };

  const styles = {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1.1) 0%,
    rgba(0, 0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w500${movieId?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    height: "50vh",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    objectFit: "center",
  };

  return { movieId } ? (
    <>
      <div className="Overlay">
        <div className="ContenedorModal">
          <div className="acaVaElButton">
            <Link to="/">
              <button
                type="button"
                onClick={handleClick}
                class="button"
                aria-label="Close"
              >
                X
              </button>
            </Link>
          </div>

          <div className="modal-img" style={styles}></div>
          <div className="align">
            <div className="modal-content">
              <h1>{movieId?.original_title}</h1>
              <h6>{movieId?.tagline}</h6>
              <p>{movieId?.overview}</p>
            </div>
            <div className="relatedMovies-container">
              <h3 className="masTitulos">Más títulos similares a este</h3>
              <div className="relatedMovies row row-cols-3">
                {relatedMovies?.results.map((relatedMovie) => {
                  return (
                    <div className="oneMovie">
                      <Link to={`/pelicula/${relatedMovie.id}`}>
                        <img
                          className="relatedMovie-img"
                          src={
                            relatedMovie.backdrop_path
                              ? `https://image.tmdb.org/t/p/w500${relatedMovie?.backdrop_path}`
                              : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                          }
                          alt=""
                        ></img>
                      </Link>
                      <div className="oneMovie-info">
                        <h6>{relatedMovie?.original_title}</h6>
                        <p className="description">{relatedMovie?.overview}</p>
                      </div>
                    </div>
                  );
                })}
                {movies?.results.map((movie) => {
                  return (
                    <div className="oneMovie">
                      <img
                        className="relatedMovie-img"
                        src={
                          movie.backdrop_path
                            ? `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`
                            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                        }
                        alt=""
                      ></img>
                      <div className="oneMovie-info">
                        <h6>{movie?.original_title}</h6>
                        <p className="description">{movie?.overview}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
