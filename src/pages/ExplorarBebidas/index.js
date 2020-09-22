import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { getRandomDrinks as fetchDrink } from '../../services/DrinkApi';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Surprise from '../../images/suprise.png';
import Ingredients from '../../images/ingredients.png';

const getRandomDrink = (setRedirect, setRedirectId) => {
  fetchDrink().then(({ drinks }) => {
    console.log(drinks[0]);
    setRedirectId(drinks[0].idDrink);
    setRedirect(true);
  });
};

const ExplorarBebidas = () => {
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState();
  return redirect ? (
    <Redirect to={`/bebidas/${id}`} />
  ) : (
    <div className="exDrinks cocktailBG">
      <Header hideSearch>explore cocktails</Header>
      <div className="middle">
        <Link to="/explorar/bebidas/ingredientes" className="noDecor">
          <button data-testid="explore-by-ingredient" type="button" className="btn">
            <img src={Ingredients} alt="ingredients pic" className="btnPic" />
            BY INGREDIENT
          </button>
        </Link>
        <button
          onClick={() => getRandomDrink(setRedirect, setId)}
          data-testid="explore-surprise"
          type="button"
          className="btn"
        >
          <img src={Surprise} alt="question pic" className="btnPic" />
          SURPRISE ME
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ExplorarBebidas;
