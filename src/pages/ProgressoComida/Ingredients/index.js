import React, { Fragment, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../../context/AppContext';

const changeLocalStorage = (option, id, setRecipesInProgress) => {
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    meals: { [id]: [] },
  };
  const progressMeals = {
    ...recipesInProgress,
    meals: { [id]: [...recipesInProgress.meals[id], option] },
  };
  setRecipesInProgress(progressMeals);
  return localStorage.setItem('inProgressRecipes', JSON.stringify(progressMeals));
};

const removeFromLocalStorage = (option, id, setRecipesInProgress) => {
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const progressMeals = {
    meals: { [id]: recipesInProgress.meals[id].filter((item) => item !== option) },
  };
  setRecipesInProgress(progressMeals);
  return localStorage.setItem('inProgressRecipes', JSON.stringify(progressMeals));
};

const toggleCheck = (labelId, id, setRecipesInProgress, recipeDoneToggle) => {
  const label = document.querySelector(`label[for=${labelId}]`);
  if (label.style.textDecoration === 'line-through') {
    label.style.textDecoration = 'inherit';
    removeFromLocalStorage(labelId, id, setRecipesInProgress);
  } else {
    label.style.textDecoration = 'line-through';
    changeLocalStorage(labelId, id, setRecipesInProgress);
  }
  if (
    document.querySelectorAll('input[type=checkbox]:checked').length ===
    document.querySelectorAll('input[type=checkbox]').length
  ) {
    recipeDoneToggle(true);
  }
};

function IngredientsMeal({ meal }) {
  const { id } = useParams();
  const { setRecipeDone } = useContext(AppContext);
  const recipeDoneToggle = (value) => setRecipeDone(value);
  const [recipesInProgress, setRecipesInProgress] = useState(
    JSON.parse(localStorage.getItem('inProgressRecipes')) || { meals: { [id]: [] } },
  );
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
      <p className="details-subtitle">Ingredients</p>
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <div data-testid={`${index}-ingredient-step`} key={`ingredient${index + 1}`}>
            <input
              checked={recipesInProgress.meals[id].some(
                (item) => item === `ingredient${index + 1}`,
              )}
              id={`ingredient${index + 1}`}
              type="checkbox"
              onChange={(e) => toggleCheck(e.target.id, id, setRecipesInProgress, recipeDoneToggle)}
            />
            <label htmlFor={`ingredient${index + 1}`}>
              {`${ingredient[`strIngredient${index + 1}`]}
              ${
                ingredient[`strMeasure${index + 1}`]
                  ? `- ${ingredient[`strMeasure${index + 1}`]}`
                  : ''
              }`}
            </label>
          </div>
        ))}
    </Fragment>
  );
}

export default IngredientsMeal;

IngredientsMeal.propTypes = {
  meal: PropTypes.shape({
    strIngredient1: PropTypes.string,
    strIngredient2: PropTypes.string,
    strIngredient3: PropTypes.string,
    strIngredient4: PropTypes.string,
    strMeasure1: PropTypes.string,
    strMeasure2: PropTypes.string,
    strMeasure3: PropTypes.string,
    strMeasure4: PropTypes.string,
  }).isRequired,
};
