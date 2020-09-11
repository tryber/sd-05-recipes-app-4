import React, { useEffect, useState } from 'react';
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
    <div className="container">
      <Header meal={meal} />
      <Ingredients meal={meal} />
      <Instruction meal={meal} />
      <Recommend drink={drink} />
    </div>
  );
}

Detalhes.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
