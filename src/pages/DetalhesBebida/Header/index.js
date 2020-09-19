import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import fclipboard from '../../DetalhesComida/Header/clipBoard';
import favIcon from '../../../images/whiteHeartIcon.svg';
import blackFavIcon from '../../../images/blackHeartIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';

import './index.css';

const toggleHeartDrink = (target, Drink) => {
  const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const favBtn = document.getElementById('favBtn');
  if (target.src.includes('whiteHeart')) {
    favBtn.src = blackFavIcon;
    const recipe = {
      id: Drink.idDrink,
      type: 'bebida',
      area: '',
      category: Drink.strCategory,
      alcoholicOrNot: Drink.strAlcoholic,
      name: Drink.strDrink,
      image: Drink.strDrinkThumb,
    };
    const newStorage = [...storage, recipe];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  } else {
    favBtn.src = favIcon;
    const newStorage = storage.filter((recipe) => recipe.id !== Drink.idDrink);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  }
};

const HeaderDrink = ({ Drink }) => {
  const storage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const fav = storage.some((recipe) => recipe.id === Drink.idDrink);
  return (
    <Fragment>
      <div className="details-title-container">
        <div className="details-title">
          <p data-testid="recipe-title">{Drink.strDrink}</p>
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
            onClick={(e) => toggleHeartDrink(e.target, Drink)}
          />
        </div>
      </div>
      <p className="details-category" data-testid="recipe-category">
        {Drink.strAlcoholic}
      </p>
    </Fragment>
  );
};

export default HeaderDrink;

HeaderDrink.propTypes = {
  Drink: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
};
