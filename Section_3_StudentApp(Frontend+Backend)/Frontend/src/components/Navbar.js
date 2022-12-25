import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Create from "./Create";
import List from "./List";

const Navbar = () => {

  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Student
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <span class="navbar-text">{email}</span>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
