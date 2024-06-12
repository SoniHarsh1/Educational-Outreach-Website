import React from 'react';
import PropTypes from 'prop-types';
import './App.css'; 
import img from './maxresdefault.jpg';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </a>
                  <ul className="dropdown-menu custom-dropdown-menu">
                    <li><Link className="dropdown-item" to="/about/Education_Outreach">Education Outreach</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/about/Our_People">Our People</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/about/IIT_INDORE">IIT Indore</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/about/Campus_Life">Campus Life</Link></li>
                  </ul>
                </li>
                <div className="nav-divider"></div>
                <li className="nav-item">
                  <Link className="nav-link" to="/Programs">Programs</Link>
                </li>
                <div className="nav-divider"></div>
                <li className="nav-item">
                  <Link className="nav-link" to="/Cooperation_&_Engagements">Cooperation &<br/>  Engagements</Link>
                </li>
                <div className="nav-divider"></div>
                <li className="nav-item">
                  <Link className="nav-link" to="/Academics_&_Research">Academics & <br/>  Research</Link>
                </li>
                <div className="nav-divider"></div>
                <li className="nav-item">
                  <Link className="nav-link" to="/News_&_Events">News & Events</Link>
                </li>
                <div className="nav-divider"></div>
                <li className="nav-item">
                  <Link className="nav-link" to="/Reach_Us">Reach Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="image-container">
        <img src={img} alt="Your Image" className="header-img" />
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abt: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Home',
  abt: 'about',
};
