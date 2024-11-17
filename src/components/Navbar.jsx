/**
 *
 * Navbar section that contain links to other pages
 *
 */

import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar({ itemCount }) {
  return (
    // <!-- Navbar -->
    <section id="navbar">
      <div className="logo">
        <a href="#">
          <img id="logo-pic" src="/img/negative-man-pic.png" alt="Logo" />
        </a>
      </div>
      <a href="./" className="page tech-shop">
        Digi World
      </a>
      <a href="./" className="page home-page">
        Home
      </a>
      <a href="./about" className="page about-page">
        About
      </a>
      <a href="./contact" className="page contact-page">
        Contact
      </a>
      <a href="./admin" className="page admin-page">
        Admin
      </a>
      <a href="#" className="page login" style="float: right">
        login
      </a>
      <a href="#" className="page wishlist" style="float: right">
        Cart ({itemCount}) <i className="fas fa-heart"></i>
      </a>
    </section>
  );
}

export default Navbar;
