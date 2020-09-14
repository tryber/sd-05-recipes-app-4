import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import favIcon from '../../../images/whiteHeartIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';
import './index.css';
import Clipboard  from 'clipboard-copy';

const clipBoard = () => {
  return Clipboard(window.location.href)
};

const Header = ({ meal }) => (
  <Fragment>
    <div className="header-container">
      <img
        className="img-header"
        data-testid="recipe-photo"
        src={meal.strMealThumb}
        alt="thumbnail da comida"
      />
      <div className="container-btn">
        <div className="title-container">
          <div className="title">
            <p data-testid="recipe-title">{meal.strMeal}</p>
          </div>
          <div className="title-type">
            <p data-testid="recipe-category">{meal.strCategory}</p>
          </div>
        </div>
        <div className="share-btn">
          <img
            data-testid="share-btn"
            className="shareicon"
            src={shareIcon}
            alt="share icon"
            value="Xablay"
            onClick={() => clipBoard()}
          />

          <img
            data-testid="favorite-btn"
            className="favicon"
            src={favIcon}
            alt="favicon icon"
          />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Header;

Header.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.number.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
};
