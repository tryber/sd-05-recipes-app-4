import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Ingredients = () => (
  <Fragment>
    <div className="container-ingredients">
      <p className="ingredients-title">Ingredients</p>
      <div className='ingredients-box'>
        <p data-testid="0-ingredient-name-and-measure">TESTE</p>
        <p data-testid="0-ingredient-name-and-measure">TESTE</p>
        <p data-testid="0-ingredient-name-and-measure">TESTE</p>
        <p data-testid="0-ingredient-name-and-measure">TESTE</p>
      </div>
    </div>
  </Fragment>
);

export default Ingredients;

Ingredients.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.number.isRequired,
  }).isRequired,
};
