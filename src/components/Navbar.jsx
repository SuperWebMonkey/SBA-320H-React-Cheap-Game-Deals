/**
 *
 * Navbar section that contain links to other pages
 *
 */

import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar({ itemCount }) {
  const linkStyle = {
    float: "right",
  };

  return (
    // <!-- Navbar -->
    <div id="navbar">
      <div className="logo">
        <Link to="/">
          <img id="logo-pic" src="/img/digimon-log.png" alt="digimon Logo" />
        </Link>
      </div>
      <Link to="/" className="page tech-shop">
        Digi World
      </Link>
      <Link to="#" className="page login" style={linkStyle}>
        login
      </Link>
      <Link to="/cart" className="page wishlist" style={linkStyle}>
        Cart ({itemCount}) <i className="fas fa-heart"></i>
      </Link>
    </div>
  );
}

export default Navbar;
