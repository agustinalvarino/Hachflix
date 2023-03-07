import ScrollEternal from "../components/ScrollEternal";
import Modal from "../components/Modal";

export default function Peliculas({
  modal,
  setMovieId,
  movieId,
  setModal,
  query,
}) {
  return (
    <>
      <ScrollEternal
        modal={modal}
        setModal={setModal}
        setMovieId={setMovieId}
        query={query}
        tierralupa
      />
      {modal ? <Modal movieId={movieId} setModal={setModal} /> : null}
    </>
  );
}
