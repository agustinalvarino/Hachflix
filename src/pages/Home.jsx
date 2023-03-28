import React from "react";
import Header from "../components/Header";
import Populars from "../components/Populars";
import Toprated from "../components/TopRated";
import Hollywood from "../components/Hollywood";
import Modal from "../components/Modal";
import { useEffect } from "react";

export default function Home({
  setModal,
  setMovieId,
  movieId,
  modal,
  responsive,
  responsiveChico,
  setNavSearch,
}) {
  useEffect(() => {
    setModal(false);
  }, []);
  return (
    <>
      <Header setModal={setModal} setMovieId={setMovieId} modal={modal} />
      <div className="carruseles-grid">
        <Populars
          responsive={responsive}
          modal={modal}
          setModal={setModal}
          movieId={movieId}
          setMovieId={setMovieId}
          setNavSearch={setNavSearch}
        />
        <Hollywood
          responsive={responsiveChico}
          setModal={setModal}
          setMovieId={setMovieId}
        />
        <Toprated responsive={responsive} />
      </div>
      {modal ? <Modal movieId={movieId} setModal={setModal} /> : null}
    </>
  );
}
