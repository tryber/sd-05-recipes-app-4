import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppContext from '../../context/AppContext';
import { getDrinksIngredients, getDrinksByIngredients } from '../../services/DrinkApi';

const ExplorarIngredientesDrinks = () => {
  const [ingArray, setIngArray] = useState([]);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {getDrinksIngredients().then((data) => setIngArray(data.drinks))}, []);

  const { setDataDrink } = useContext(AppContext);

  const clickOn = (ingrediente) => {
    getDrinksByIngredients(ingrediente).then((data) => {setDataDrink(data.drinks); setRedirect(true)})
  };

  const listIngredients = (ingArray) =>
  ingArray.map((ingrediente, index) => (
    <div
      className="recipe-card"
      key={ingrediente.strDrink}
      data-testid={`${index}-ingredient-card`}
      onClick={()=> clickOn(ingrediente.strIngredient1)}
    >
      <img
        className="thumbnail"
        data-testid={`${index}-card-img`}
        src={`https://www.thecocktaildb.com/images/ingredients/${ingrediente.strIngredient1}-Small.png`}
        alt="thumbnail do ingrediente"
      />
      <p data-testid={`${index}-card-name`}>{ingrediente.strIngredient1}</p>
    </div>
  ));

  if (ingArray.length > 12) setIngArray(ingArray.slice(0, 12));
  if (redirect) return <Redirect to="/bebidas" />;

  return (
  <div className="recipes-container">
    <Header hideSearch>Explorar Ingredientes</Header>
    {listIngredients(ingArray)}
    <Footer />
  </div>
  );
};

export default ExplorarIngredientesDrinks;
