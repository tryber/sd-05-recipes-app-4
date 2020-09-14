import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import favIcon from '../../../images/whiteHeartIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';
import './index.css';
import Clipboard from 'clipboard-copy';

const clipBoard = () => {
  document.getElementById('btn-share-id').innerHTML = 'Link copiado!';
  return Clipboard(window.location.href);
};

const Header = ({ Drink }) => (
  <Fragment>
    <div className="header-container">
      <img
        className="img-header"
        data-testid="recipe-photo"
        src={Drink.strDrinkThumb}
        alt="thumbnail da comida"
      />
      <div className="container-btn">
        <div className="title-container">
          <div className="title">
            <p data-testid="recipe-title">{Drink.strDrink}</p>
          </div>
          <div className="title-type">
            <p data-testid="recipe-category">{Drink.strAlcoholic}</p>
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
            onClick={() => clipBoard()}
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

export default Header;

Header.propTypes = {
  Drink: PropTypes.shape({
    idDrink: PropTypes.number.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
  }).isRequired,
};
