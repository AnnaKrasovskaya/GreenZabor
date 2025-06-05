import "./index.scss";
import { Link } from "react-router-dom";
import pages from "../../db/pages.js";
import { useState } from "react";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navMenu">
      <div className="container">
        <a href={"/"} className="logo">
          Green Zabor
        </a>
        <div className={`menuList ${isMenuOpen ? "active" : ""}`}>
          <button className="closeButton" onClick={toggleMenu}>
            <span></span>
            <span></span>
          </button>
          {pages.map((item, index) => (
            <Link
              key={index}
              to={item.slug}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
