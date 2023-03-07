import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../components/css/Movie.css";

export default function Movie({
  modal,
  setModal,
  movieId,
  setMovieId,
  responsive,
  responsiveChico,
}) {
  const params = useParams();

  useEffect(() => {
    const movieData = async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US`
        )
        .then((response) => setMovieId(response.data));
    };
    movieData();
  }, []);

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

  return movieId ? (
    <>
      <div className="container">
        <div style={styles}></div>
        <div className="info d-flex">
          <div className="left">
            <h1>{movieId.original_title}</h1>
            <h6>{movieId.tagline}</h6>
            <p className="overview">{movieId.overview}</p>
          </div>
          <div className="right">
            <div className="gen">
              <p className="d-flex">
                Géneros:{" "}
                {movieId.genres.map((genero) => {
                  return <p className="ms-2">{genero.name} </p>;
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
