import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../components/css/Movie.css";

export default function Movie({ responsive, responsiveChico }) {
  const params = useParams();

  const [movieId, setMovieId] = React.useState();
  const [relatedMovies, setRealtedMovies] = React.useState();
  useEffect(() => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US`
      )
      .then((response) => setRealtedMovies(response.data));
  });

  useEffect(() => {
    const movieData = async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US`
        )
        .then((response) => setMovieId(response.data));
    };
    movieData();
  });

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
      <div style={styles}></div>
      <div className="container">
        <div className="head d-flex">
          <div className="left">
            <h1>{movieId?.original_title}</h1>
            <h6>{movieId?.tagline}</h6>
          </div>
          <div className="right">
            <p className="d-flex">
              Géneros: {movieId?.genres[0].name}, {movieId?.genres[1].name},{" "}
              {movieId?.genres[2].name}.
            </p>
          </div>
        </div>
        <div className="center">
          <p className="overview">{movieId?.overview}</p>
          <div className="relatedMovies row row-cols-3">
            {relatedMovies?.results.map((relatedMovie) => {
              return (
                <div className="oneMovie">
                  <Link to={`/pelicula/${relatedMovie?.id}`}>
                    <img
                      className="relatedMovie-img"
                      src={
                        relatedMovie?.backdrop_path
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
          </div>
        </div>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}
