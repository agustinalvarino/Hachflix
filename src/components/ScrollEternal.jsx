import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import "./css/ScrollEternal.css";
import { Link } from "react-router-dom";

export default function ScrollEternal({ modal, setModal, query }) {
  const [movies, setMovies] = React.useState(null);
  const [page, setPage] = React.useState(2);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US&page=1`
      )
      .then((response) => setMovies(response.data.results));
  }, []);

  async function fetchData() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US&page=${page}`
      )
      .then((response) =>
        setMovies((movies) => movies.concat(response.data.results))
      )
      .then(() => setPage((prev) => prev + 1));
  }

  const handleClick = () => {
    setModal((prevModal) => !prevModal);
  };

  return movies ? (
    <>
      <div className="scrollContainer">
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchData}
          hasMore={true}
        >
          <div className="scroll-grid d-flex row row-cols-3">
            {movies
              .filter((movie) =>
                movie.original_title.toLowerCase().includes(query)
              )
              .map((movie) => {
                return (
                  <Link to={`/pelicula/${movie.id}`}>
                    <div
                      className="infiniteMovie"
                      onClick={handleClick}
                      key={movie.id}
                    >
                      <img
                        className="img-fluid poster"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt=""
                      ></img>
                    </div>
                  </Link>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  ) : null;
}
