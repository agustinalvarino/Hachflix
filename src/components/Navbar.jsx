import "./css/Navbar.css";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import lupa from "../img/lupa.svg";

export default function Navbar({ setQuery, navSearch }) {
  const [navbar, setNavbar] = React.useState(false);

  const changeBackgroundNav = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(navbar);
  };
  window.addEventListener("scroll", changeBackgroundNav);

  return (
    <>
      <div className={navbar ? "nav-black" : "nav"}>
        <div className="nav-button-container">
          <Link to="/" className="navito">
            <h3 className="nav-logo">HACKFLIX</h3>
          </Link>
          <Link to="/peliculas" className="navito">
            <p className="nav-button">Películas</p>
          </Link>
        </div>
        <div className="searchBar">
          <Link to="/peliculas">
            <img className="lupita" src={lupa} alt=""></img>
          </Link>
          <input
            type="text"
            placeholder="Títulos, personas, genero..."
            className={navSearch ? "searchTrue" : "searchFalse"}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
}
