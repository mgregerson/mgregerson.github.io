import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleNavigation() {
    setIsExpanded(!isExpanded);
  }

  return (
    <nav
      className={`Navigation navbar navbar-expand-md ${
        isExpanded ? "navbar-expand-lg" : ""
      }`}
    >
      <div className="container-fluid">
        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
          id="navbarNav"
        >
          <div className="navbar-left">
            [&nbsp;&nbsp;
            <a href="#BioCard-title" className="navbar-link">
              About Me
            </a>
            ,&nbsp;&nbsp;
            <a href="#Tech-title" className="navbar-link">
              Tech
            </a>
            ,&nbsp;&nbsp;
            <a href="#Projects-title" className="navbar-link">
              Projects
            </a>
            ,&nbsp;&nbsp;
            <a
              href="https://docs.google.com/document/d/1xgLvpDiG797oAkFqP3fAC2Lx6LMw48jwceiY7PgD_3o/preview"
              className="navbar-link"
            >
              My Resume
            </a>
            &nbsp;&nbsp;]
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={toggleNavigation}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <div className="contact-container">
              <div className="contact-link-container">
                <div className="contact-icons">
                  <span>
                    <a
                      href="https://github.com/mgregerson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bi bi-github link"
                      style={{ fontSize: "1rem", color: "#ffffff" }}
                    ></a>
                  </span>
                  <span>
                    <a
                      href="mailto:mgregerson4321@gmail.com"
                      className="bi bi-envelope link"
                      style={{ fontSize: "1rem", color: "#ffffff" }}
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
