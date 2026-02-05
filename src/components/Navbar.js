import React from "react";
 

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backdropFilter: "blur(12px)",
        background: "rgba(0, 0, 0, 0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container-fluid">
        <span
          className="navbar-brand fw-bold"
          style={{
            color: "#00e5ff",
            letterSpacing: "1px",
            fontSize: "1.3rem",
          }}
        >
          ⚡ TextCraft
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#fancyNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="fancyNavbar">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-2">
              <a className="nav-link text-light fw-semibold" href="#">
                Analyzer
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link text-light fw-semibold" href="#">
                Features
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link text-light fw-semibold" href="#">
                About
              </a>
            </li>

            <li className="nav-item mx-2">
              <button className="btn btn-outline-info btn-sm px-3">
                Dark Mode
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
