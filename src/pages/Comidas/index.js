import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import AppContext from '../../context/AppContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Comidas = () => {
  const { dataFood } = useContext(AppContext);
  let foodArray = dataFood;
  if (!Array.isArray(dataFood)) {
    foodArray = [];
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  } else if (dataFood.length === 1) return <Redirect to={`/comidas/${dataFood[0].idMeal}`} />;
  if (foodArray.length > 12) foodArray = foodArray.slice(0, 12);
  return (
    <div>
      <Header>Comidas</Header>
      {foodArray.map((food, index) => (
        <div data-testid={`${index}-recipe-card`}>
          <img
            data-testid={`${index}-card-img`}
            src={food.strMealThumb}
            alt="thumbnail da comida"
          />
          <p data-testid={`${index}-card-name`}>{food.strMeal}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Comidas;
