import React from 'react';
import { faRankingStar, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="mx-auto">
          <a className="navbar-brand" href="#">LyricPlete</a>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faRankingStar} className="custom-icon" />
          <FontAwesomeIcon icon={faRightToBracket} className="custom-icon last-item" />
        </div>
      </div>
    </nav>
  );
};
