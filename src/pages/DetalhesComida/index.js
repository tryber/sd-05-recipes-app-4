import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getMealById } from '../../services/MealApi';
import { getDrinks } from '../../services/DrinkApi';

import Header from './Header';
import Instruction from './Instruction';
import Recommend from './Recommend';
import Ingredients from './Ingredients';
import './index.css';

export default function Detalhes(props) {
  const { id } = props.match.params;
  const [meal, setMeal] = useState({});
  useEffect(() => {
    getMealById(id).then((data) => setMeal(data.meals[0]));
  }, [setMeal, id]);

  const [drink, setdrink] = useState({});
  useEffect(() => {
    getDrinks().then((data) => setdrink(data.drinks.slice(0, 6)));
  }, [setdrink]);

  return (
    <Fragment>
      <div className="container">
        <Header meal={meal} />
        <Ingredients meal={meal} />
        <Instruction meal={meal} />
        <Recommend drink={drink} />
        <div className="button-container">
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="start-receip"
            onClick={() => alert('Sumpimpa!')}
          >
            <span className="btn-text">Iniciar Receita</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

Detalhes.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
};
