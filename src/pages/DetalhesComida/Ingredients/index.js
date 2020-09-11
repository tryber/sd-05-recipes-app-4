import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Ingredients(props) {
  const { meal } = props;
  return (
    <Fragment>
    <div className="container-ingredients">
      <p className="ingredients-title">Ingredients</p>
      <div className="ingredients-box">
        {meal.strIngredient1 &&
          meal.strMeasure1 && (
            <p data-testid="0-ingredient-name-and-measure">
              - {meal.strIngredient1} - {meal.strMeasure1}
            </p>
          )}
        {meal.strIngredient2 &&
          meal.strMeasure2 && (
            <p data-testid="1-ingredient-name-and-measure">
              - {meal.strIngredient2} - {meal.strMeasure2}
            </p>
          )}
        {meal.strIngredient3 &&
          meal.strMeasure3 && (
            <p data-testid="2-ingredient-name-and-measure">
              - {meal.strIngredient3} - {meal.strMeasure3}
            </p>
          )}
        {meal.strIngredient4 &&
          meal.strMeasure4 && (
            <p data-testid="3-ingredient-name-and-measure">
              - {meal.strIngredient4} - {meal.strMeasure4}
            </p>
          )}
        {meal.strIngredient5 &&
          meal.strMeasure5 && (
            <p data-testid="4-ingredient-name-and-measure">
              - {meal.strIngredient5} - {meal.strMeasure5}
            </p>
          )}
        {meal.strIngredient6 &&
          meal.strMeasure6 && (
            <p data-testid="5-ingredient-name-and-measure">
              - {meal.strIngredient6} - {meal.strMeasure6}
            </p>
          )}
        {meal.strIngredient7 &&
          meal.strMeasure7 && (
            <p data-testid="6-ingredient-name-and-measure">
              - {meal.strIngredient7} - {meal.strMeasure7}
            </p>
          )}
        {meal.strIngredient8 &&
          meal.strMeasure8 && (
            <p data-testid="7-ingredient-name-and-measure">
              - {meal.strIngredient8} - {meal.strMeasure8}
            </p>
          )}
      </div>
    </div>
  </Fragment>
  );
}

export default Ingredients;

Ingredients.propTypes = {
  meal: PropTypes.shape({
    strIngredient1: PropTypes.string.isRequired,
    strIngredient2: PropTypes.string.isRequired,
    strIngredient3: PropTypes.string.isRequired,
    strIngredient4: PropTypes.string.isRequired,
    strMeasure1: PropTypes.string.isRequired,
    strMeasure2: PropTypes.string.isRequired,
    strMeasure3: PropTypes.string.isRequired,
    strMeasure4: PropTypes.string.isRequired,
  }).isRequired,
};
