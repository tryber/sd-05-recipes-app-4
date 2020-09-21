import React, { useEffect, useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getMealById } from '../../services/MealApi';
import AppContext from '../../context/AppContext';
import Header from './Header';
import Instruction from '../DetalhesComida/Instruction';
import Ingredients from './Ingredients';

const handleProgress = (meal, setRedirect) => {
  const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const doneRecipe = [
    ...recipes,
    {
      id: meal.idMeal,
      type: 'comida',
      area: meal.strArea,
      category: meal.strCategory,
      alcoholicOrNot: '',
      name: meal.strMeal,
      image: meal.strMealThumb,
      doneDate: new Date().toLocaleDateString(),
      tags: '',
    },
  ];
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe));
  setRedirect(true);
};

export default function DetalhesComida(props) {
  const { id } = props.match.params;
  const [meal, setMeal] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { recipeDone } = useContext(AppContext);
  useEffect(() => {
    getMealById(id).then((data) => setMeal(data.meals[0]));
  }, [setMeal, id]);
  if (redirect) return <Redirect to="/receitas-feitas" />;
  return (
    <Fragment>
      <img
        className="details-thumbnail"
        data-testid="recipe-photo"
        src={meal.strMealThumb}
        alt="thumbnail da comida"
      />
      <div className="details-container">
        <Header meal={meal} />
        <Ingredients meal={meal} />
        <Instruction meal={meal} />
      </div>
      <button
        disabled={!recipeDone}
        type="button"
        data-testid="finish-recipe-btn"
        className="fixed"
        onClick={() => handleProgress(meal, setRedirect)}
      >
        Finish recipe
      </button>
    </Fragment>
  );
}

DetalhesComida.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
