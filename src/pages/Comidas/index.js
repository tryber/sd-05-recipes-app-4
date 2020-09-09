import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';

import AppContext from '../../context/AppContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';

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
        <div className="container" data-testid={`${index}-recipe-card`}>
          <div className="img-container">
            <Link to={`/comidas/${food.idMeal}`}>
              <img
                className="img-cards"
                data-testid={`${index}-card-img`}
                src={food.strMealThumb}
                alt="thumbnail da comida"
              />
            </Link>
            <p data-testid={`${index}-card-name`}>{food.strMeal}</p>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Comidas;
