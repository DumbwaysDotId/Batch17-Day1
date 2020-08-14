import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fetch-todos" className="nav-link">
              Todos Axios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/todos-react-query" className="nav-link">
              Todos React Query
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

{
  /* <nav>
<ul>
  <li>
    
  </li>
  <li>
    <Link to="/fetch-todos">Fetch Todos Axios</Link>
  </li>
  <li>
    <Link to="/Todos">Todos</Link>
  </li>
  <li>
    <Link to="/Increment">Increment</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/form">Form</Link>
  </li>
</ul>
</nav>  */
}
