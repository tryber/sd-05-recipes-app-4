import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function IngredientsDrink(props) {
  const { Drink } = props;
  return (
    <Fragment>
      <div className="container-ingredients">
        <p className="ingredients-title">Ingredients</p>
        <div className="ingredients-box">
          {Drink.strIngredient1 &&
            Drink.strMeasure1 && (
              <p data-testid="0-ingredient-name-and-measure">
                - {Drink.strIngredient1} - {Drink.strMeasure1}
              </p>
            )}
          {Drink.strIngredient2 &&
            Drink.strMeasure2 && (
              <p data-testid="1-ingredient-name-and-measure">
                - {Drink.strIngredient2} - {Drink.strMeasure2}
              </p>
            )}
          {Drink.strIngredient3 &&
            Drink.strMeasure3 && (
              <p data-testid="2-ingredient-name-and-measure">
                - {Drink.strIngredient3} - {Drink.strMeasure3}
              </p>
            )}
          {Drink.strIngredient4 &&
            Drink.strMeasure4 && (
              <p data-testid="3-ingredient-name-and-measure">
                - {Drink.strIngredient4} - {Drink.strMeasure4}
              </p>
            )}
          {Drink.strIngredient5 &&
            Drink.strMeasure5 && (
              <p data-testid="4-ingredient-name-and-measure">
                - {Drink.strIngredient5} - {Drink.strMeasure5}
              </p>
            )}
          {Drink.strIngredient6 &&
            Drink.strMeasure6 && (
              <p data-testid="5-ingredient-name-and-measure">
                - {Drink.strIngredient6} - {Drink.strMeasure6}
              </p>
            )}
          {Drink.strIngredient7 &&
            Drink.strMeasure7 && (
              <p data-testid="6-ingredient-name-and-measure">
                - {Drink.strIngredient7} - {Drink.strMeasure7}
              </p>
            )}
          {Drink.strIngredient8 &&
            Drink.strMeasure8 && (
              <p data-testid="7-ingredient-name-and-measure">
                - {Drink.strIngredient8} - {Drink.strMeasure8}
              </p>
            )}
        </div>
      </div>
    </Fragment>
  );
}

export default IngredientsDrink;

IngredientsDrink.propTypes = {
  Drink: PropTypes.shape({
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
