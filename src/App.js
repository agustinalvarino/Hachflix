//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Modal from "./components/Modal";
import env from "react-dotenv";
import Peliculas from "./pages/Peliculas";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
  },
  desktopLarge: {
    breakpoint: { max: 3000, min: 2000 },
    items: 8,
  },
  desktopMedium: {
    breakpoint: { max: 2000, min: 1350 },
    items: 7,
  },
  desktopSmall: {
    breakpoint: { max: 1350, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 766 },
    items: 5,
  },
  tabletChiquita: {
    breakpoint: { max: 766, min: 500 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 3,
  },
};
const responsiveChico = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktopLarge: {
    breakpoint: { max: 3000, min: 2000 },
    items: 6,
  },
  desktopMedium: {
    breakpoint: { max: 2000, min: 1350 },
    items: 5,
  },
  desktopSmall: {
    breakpoint: { max: 1350, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 766 },
    items: 3,
  },
  tabletChiquita: {
    breakpoint: { max: 766, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
  },
};

function App() {
  const [modal, setModal] = React.useState(false);
  const [movieId, setMovieId] = React.useState();
  const [query, setQuery] = React.useState("");

  return (
    <div className="layout">
      <Navbar setQuery={setQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              modal={modal}
              setModal={setModal}
              movieId={movieId}
              setMovieId={setMovieId}
              responsive={responsive}
              responsiveChico={responsiveChico}
            />
          }
        />
        <Route
          path="/pelicula/:id"
          element={
            <Movie
              modal={modal}
              setModal={setModal}
              movieId={movieId}
              setMovieId={setMovieId}
              responsive={responsive}
              responsiveChico={responsiveChico}
            />
          }
        />
        <Route
          path="/peliculas"
          element={
            <Peliculas
              modal={modal}
              setMovieId={setMovieId}
              movieId={movieId}
              setModal={setModal}
              query={query}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
