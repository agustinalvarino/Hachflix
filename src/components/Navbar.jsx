import "./css/Navbar.css";
import React from "react";
import "../App.css";

export default function Navbar() {
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
        <h3 className="nav-logo">HACKFLIX</h3>
      </div>
    </>
  );
}
