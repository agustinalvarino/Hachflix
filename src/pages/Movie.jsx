import React, { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import { ModalDialog } from "react-bootstrap";

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

  return movieId ? (
    <>
      <img
        className="img-fluid poster"
        src={`https://image.tmdb.org/t/p/w500${movieId.poster_path}`}
        alt=""
      ></img>
      <h1>{movieId.original_title}</h1>
    </>
  ) : null;
}
