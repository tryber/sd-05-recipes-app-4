import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getMeals } from '../../services/MealApi';
import { getDrinkById } from '../../services/DrinkApi';
import AppContext from '../../context/AppContext';
import Header from './Header';
import Instruction from '../DetalhesBebida/Instruction';
import Ingredients from './Ingredients';
import './index.css';

const handleProgress = (drink, setRedirect) => {
  const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const doneRecipe = [...recipes, {
    id: drink.idDrink,
    type: 'bebida',
    area: '',
    category: drink.strCategory,
    alcoholicOrNot: drink.strAlchoolic,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    doneDate: new Date(),
    tags: '',
  }];
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipe));
  setRedirect(true);
};

export default function DetalhesBebidas(props) {
  const { id } = props.match.params;
  const [drink, setDrink] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { recipeDone } = useContext(AppContext);
  useEffect(() => {
    getDrinkById(id).then((data) => setDrink(data.drinks[0]));
  }, [setDrink, id]);
  if (redirect) return <Redirect to="/receitas-feitas" />;
  return (
    <div className="container">
      <Header Drink={drink} />
      <Ingredients Drink={drink} />
      <Instruction Drink={drink} />
      <button
        disabled={!recipeDone}
        type="button"
        data-testid="finish-recipe-btn"
        className="start-recipe"
        onClick={() => handleProgress(drink, setRedirect)}
      >
        <span className="btn-text">Finalizar receita</span>
      </button>
    </div>
  );
}

DetalhesBebidas.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
