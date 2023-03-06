import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export default function ScrollEternal() {
  const [movies, setMovies] = React.useState(null);
  const [page, setPage] = React.useState(2);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7fd94ee7a2b7d02794d136b5214c3516&language=en-US&page=1`
      )
      .then((response) => setMovies(response.data.results));
  }, []);
  // TODO API KEY
  // TODO ASYNC AWAIT
  // LLAMADA AXIOS TEAMS
  //
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

  return movies ? (
    <div className="infiniteScroll">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="d-flex row row-cols-3">
          {movies.map((movie) => {
            return (
              <div className="" key={movie.id}>
                <img
                  className="img-fluid poster"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                ></img>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  ) : null;
}
