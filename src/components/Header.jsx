import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Library Management System</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/authors" className="nav-link">
            Authors
          </Link>
          <Link to="/books" className="nav-link">
            Books
          </Link>
          <Link to="/publishers" className="nav-link">
            Publishers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
