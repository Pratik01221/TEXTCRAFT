import React from "react";

export default function Navbar({ mode, toggleMode }) {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backdropFilter: "blur(12px)",
        background:
          mode === "dark"
            ? "rgba(0, 0, 0, 0.7)"
            : "rgba(255, 255, 255, 0.8)",
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

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item mx-2">
              <button
                onClick={toggleMode}
                className="btn btn-outline-info btn-sm px-3"
              >
                {mode === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
