import React, { useEffect, useState } from 'react';
import { getMealById } from '../../services/MealApi';
import Header from '../DetalhesComida/Header';

const ProgressoComida = ({ match }) => {
  const { id } = match.params;
  const [meal, setMeal] = useState({});
  useEffect(() => {
    getMealById(id).then((data) => setMeal(data.meals[0]));
  }, [setMeal, id]);
  return (
    <div>
      <Header meal={meal} />
    </div>
  );
};

export default ProgressoComida;
