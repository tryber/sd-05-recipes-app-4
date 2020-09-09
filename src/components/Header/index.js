import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

import './index.css';
import SearchBar from './SearchBar';

const Header = ({ children }) => {
  const [display, setDisplay] = useState(false);

  return (
    <Fragment>
      <div className="header-top">
        <Link to="/perfil">
          <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
        </Link>
        <h2 data-testid="page-title">{children}</h2>
        <input
          data-testid="search-top-btn"
          src={searchIcon}
          type="image"
          onClick={() => {
            setDisplay(!display);
          }}
          alt="search icon"
        />
      </div>
      <div className="header-bottom">{display && <SearchBar />}</div>
    </Fragment>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.string.isRequired,
};
