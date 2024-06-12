import React from 'react';
import PropTypes from 'prop-types';
import './Head.css'; 
import logo from './logo.png'; 
import { ReactComponent as MagIcon } from './mag.svg';
import { Link } from 'react-router-dom';
export default function Head(props) {
  return (
    <>
      <div className="container-fluid">
        <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
          <Link to="/" className="d-flex align-items-center text-dark text-decoration-none logo-container">
            <img src={logo} alt="IITI Logo" width="100" height="100" className="me-2"/>
            <div className="d-flex flex-column">
              <span>Educational</span>
              <span>Outreach</span>
            </div>
          </Link>
          
          <div className="d-flex align-items-center top-margin">
            <ul className="nav nav-pills me-3">
              <li className="nav-item"><Link to="/" className="nav-link text-dark">Home</Link></li>
              <div className="nav-divider"></div>
              <li className="nav-item"><Link to="/about/IIT_INDORE" className="nav-link text-dark">IIT Indore</Link></li>
            </ul>
            
            <form className="d-flex">
              <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-dark search-button" type="submit">
                <MagIcon width="16" height="16" fill="currentColor" className="bi bi-search" />
              </button>
            </form>
          </div>
        </header>
      </div>
    </>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  abt: PropTypes.string.isRequired,
};

Head.defaultProps = {
  title: 'Home',
  abt: 'about',
};
