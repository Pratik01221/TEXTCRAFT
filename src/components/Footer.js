import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backdropFilter: "blur(12px)",
        background: "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,0,0,0.8))",
        borderTop: "1px solid rgba(255,255,255,0.15)",
      }}
      className="text-light mt-5 pt-4"
    >
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h4 style={{ color: "#00e5ff" }}>⚡ TextCraft</h4>
            <p className="small text-muted">
              Smart text analysis tool built with React. Convert, clean,
              analyze and optimize your text instantly.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#/home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#/features" className="text-light text-decoration-none">Features</a></li>
              <li><a href="#/about" className="text-light text-decoration-none">About</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Connect</h6>
            <a href="#" className="btn btn-outline-info btn-sm me-2">GitHub</a>
            <a href="#" className="btn btn-outline-info btn-sm me-2">LinkedIn</a>
            <a href="#" className="btn btn-outline-info btn-sm">Twitter</a>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small text-muted pb-3">
          © {new Date().getFullYear()} TextCraft • Built with ❤️ using React
        </div>
      </div>
    </footer>
  );
}
