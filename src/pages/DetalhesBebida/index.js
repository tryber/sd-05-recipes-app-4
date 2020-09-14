import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMeals } from '../../services/MealApi';
import { getDrinkById } from '../../services/DrinkApi';

import Header from './Header';
import Instruction from './Instruction';
import Recommend from './Recommend';
import Ingredients from './Ingredients';
import './index.css';

export default function Detalhes(props) {
  const { id } = props.match.params;
  const [drink, setDrink] = useState({});
  useEffect(() => {
    getDrinkById(id).then((data) => setDrink(data.drinks[0]));
  }, [setDrink, id]);

  const [meal, setmeal] = useState({});
  useEffect(() => {
    getMeals().then((data) => setmeal(data.meals.slice(0, 6)));
  }, [setmeal]);

  return (
    <div className="container">
      <Header Drink={drink} />
      <Ingredients Drink={drink} />
      <Instruction Drink={drink} />
      <Recommend meal={meal} />
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-receip"
        onClick={() => alert('Sumpimpa!')}
        value="Entrar"
      >
        <span className="btn-text">Iniciar Receita</span>
      </button>
    </div>
  );
}

Detalhes.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
