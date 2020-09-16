import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import fclipboard from './clipBoard';
import favIcon from '../../../images/whiteHeartIcon.svg';
import blackFavIcon from '../../../images/blackHeartIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';
import './index.css';

const toggleHeartMeal = (target, meal) => {
  const favBtn = document.getElementById('favBtn');
  const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  if (target.src.includes('blackHeart')) {
    favBtn.src = favIcon;
    const newStorage = storage.filter((recipe) => recipe.id !== meal.idMeal);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  } else {
    const recipe = {
      id: meal.idMeal,
      type: 'comida',
      area: meal.strArea,
      category: meal.strCategory,
      alcoholicOrNot: '',
      name: meal.strMeal,
      image: meal.strMealThumb,
    };
    favBtn.src = blackFavIcon;
    const newStorage = [...storage, recipe];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  }
};
const HeaderMeal = ({ meal }) => {
  const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const fav = storage.some((recipe) => recipe.id === meal.idMeal);
  return (
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
              id="favBtn"
              className="favicon"
              src={fav ? blackFavIcon : favIcon}
              alt="favicon icon"
              onClick={(e) => toggleHeartMeal(e.target, meal)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderMeal;

HeaderMeal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
};
