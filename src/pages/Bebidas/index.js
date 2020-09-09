import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import AppContext from '../../context/AppContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Bebidas = () => {
  const { dataDrink } = useContext(AppContext);
  let drinkArray = dataDrink;
  if (!Array.isArray(dataDrink)) {
    drinkArray = [];
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  } else if (dataDrink.length === 1) return <Redirect to={`/bebidas/${dataDrink[0].idDrink}`} />;
  if (drinkArray.length > 12) drinkArray = drinkArray.slice(0, 12);
  return (
    <div>
      <Header>Bebidas</Header>
      {drinkArray.map((drink, index) => (
        <div data-testid={`${index}-recipe-card`}>
          <img
            data-testid={`${index}-card-img`}
            src={drink.strDrinkThumb}
            alt="thumbnail da comida"
          />
          <p data-testid={`${index}-card-name`}>{drink.strDrink}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Bebidas;
