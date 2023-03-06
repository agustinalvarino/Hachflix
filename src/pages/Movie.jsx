import React, { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import Home from "./Home";

export default function Movie({
  modal,
  setModal,
  movieId,
  setMovieId,
  responsive,
  responsiveChico,
}) {
  const [movie, setMovie] = React.useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const movieData = async () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US`
        )
        .then((response) => setMovie(response.data));
    };
    movieData();
  });

  return movie ? (
    <Home
      modal={modal}
      setModal={setModal}
      movieId={movieId}
      setMovieId={setMovieId}
      responsive={responsive}
      responsiveChico={responsiveChico}
    />
  ) : null;
}
