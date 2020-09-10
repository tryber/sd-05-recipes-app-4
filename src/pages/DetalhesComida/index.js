import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMealById } from '../../services/MealApi';

import './index.css';
import Header from './Header';
import Instruction from './Instruction';
import Recommend from './Recommend';

export default function Detalhes(props) {
  const { id } = props.match.params;
  const [meal, setMeal] = useState('');
  useEffect(() => {
    getMealById(id).then((data) => setMeal(data.meals[0]));
  }, [setMeal, id]);

  console.log("meall", meal);
  return (
    <div className="container">
      <Header meal={meal} />
      <Instruction />
      <Recommend meal={meal} />
    </div>
  );
}

Detalhes.propTypes = {
  match: PropTypes.shape({ params: PropTypes.string }).isRequired,
};
