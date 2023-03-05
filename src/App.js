import "./App.css";
import Header from "./components/Header";
import Populars from "./components/Populars";
import Toprated from "./components/TopRated";
import React from "react";
import Navbar from "./components/Navbar";
import Hollywood from "./components/Hollywood";
import Modal from "./components/Modal";
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

  return (
    <div className="layout">
      <div>
        <Navbar />
      </div>

      <Header setModal={setModal} setMovieId={setMovieId} modal={modal} />
      <div className="carruseles-grid">
        <Populars
          responsive={responsive}
          modal={modal}
          setModal={setModal}
          movieId={movieId}
          setMovieId={setMovieId}
        />
        <Toprated responsive={responsive} />
        <Hollywood responsive={responsiveChico} />

        <Toprated responsive={responsive} />
        <Populars responsive={responsive} />
        <Toprated responsive={responsive} />
      </div>
      {modal ? <Modal movieId={movieId} setModal={setModal} /> : null}
    </div>
  );
}

export default App;
