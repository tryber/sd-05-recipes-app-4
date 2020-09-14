import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function IngredientsMeal(props) {
  const { meal } = props;
  let counter = 1;
  const ingredients = Object.keys(meal).reduce((array, key) => {
    if (key.includes('strIngredient') && meal[key] !== null && meal[key].length > 0) {
      const object = {};
      object[key] = meal[key];
      object[`strMeasure${counter}`] = meal[`strMeasure${counter}`];
      counter += 1;
      return [...array, object];
    }
    return array;
  }, []);
  return (
    <Fragment>
      <div className="container-ingredients">
        <p className="ingredients-title">Ingredients</p>
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <p data-testid={`${index}-ingredient-name-and-measure`}>
              - {ingredient[`strIngredient${index + 1}`]}{' '}
              {ingredient[`strMeasure${index + 1}`]
                ? `- ${ingredient[`strMeasure${index + 1}`]}`
                : ''}
            </p>
          ))}
      </div>
    </Fragment>
  );
}

export default IngredientsMeal;

IngredientsMeal.propTypes = {
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
