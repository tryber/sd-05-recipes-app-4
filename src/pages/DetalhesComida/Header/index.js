import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard-copy';
import favIcon from '../../../images/whiteHeartIcon.svg';
import blackFavIcon from '../../../images/blackHeartIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';

const fclipboard = () => {
  document.getElementById('btn-share-id').innerHTML = 'Link copiado!';
  return Clipboard(window.location.href);
};

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
      <div className="details-title-container">
        <div className="details-title">
          <p data-testid="recipe-title">{meal.strMeal}</p>
        </div>
        <div className="favNshare">
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
      <p className="details-category" data-testid="recipe-category">
        {meal.strCategory}
      </p>
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
