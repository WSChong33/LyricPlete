import React from 'react';
import { useNavigate } from 'react-router-dom';

import { faRankingStar, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./NavBar.css";

export const NavBar = () => {

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  }

  const toAuth = () => {
    navigate('/auth');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="mx-auto align-items-center">
         <a className="navbar-brand" onClick={toHome}>LyricPlete</a>
        </div>
        <div className="d-flex">
          <FontAwesomeIcon icon={faRankingStar} className="custom-icon" />
          <FontAwesomeIcon icon={faRightToBracket} className="custom-icon last-item" onClick={toAuth} />
        </div>
      </div>
    </nav>
  );
};
