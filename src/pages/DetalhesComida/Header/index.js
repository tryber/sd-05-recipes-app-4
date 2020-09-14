import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import fclipboard from './clipBoard';
import favIcon from '../../../images/whiteHeartIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';
import './index.css';

const HeaderMeal = ({ meal }) => (
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
          <input
            type="image"
            data-testid="share-btn"
            className="shareicon"
            id="btn-share-id"
            src={shareIcon}
            alt="share icon"
            onClick={() => fclipboard()}
          />

          <input
            type="image"
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

export default HeaderMeal;

HeaderMeal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.number.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
};
