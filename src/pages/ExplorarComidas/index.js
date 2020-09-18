import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { getRandomMeals as fetchMeal } from '../../services/MealApi';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Surprise from '../../images/suprise.png';
import Ingredients from '../../images/ingredients.png';
import Passport from '../../images/passport.png';

const getRandomMeal = (setRedirect, setRedirectId) => {
  fetchMeal().then(({ meals }) => {
    console.log(meals[0]);
    setRedirectId(meals[0].idMeal);
    setRedirect(true);
  });
};

const ExplorarComidas = () => {
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState();
  return redirect ? (
    <Redirect to={`/comidas/${id}`} />
  ) : (
    <div className="exMeals mealBG">
      <Header hideSearch>explore meals</Header>
      <Link to="/explorar/comidas/ingredientes" className="noDecor">
        <button data-testid="explore-by-ingredient" type="button" className="btn">
          <img src={Ingredients} alt="ingredients pic" className="btnPic" />
          BY INGREDIENT
        </button>
      </Link>
      <Link to="/explorar/comidas/area" className="noDecor">
        <button data-testid="explore-by-area" type="button" className="btn">
          <img src={Passport} alt="question pic" className="btnPic" />
          BY PLACE OF ORIGIN
        </button>
      </Link>
      <button
        onClick={() => getRandomMeal(setRedirect, setId)}
        data-testid="explore-surprise"
        type="button"
        className="btn"
      >
        <img src={Surprise} alt="question pic" className="btnPic" />
        SURPRISE ME
      </button>
      <Footer />
    </div>
  );
};

export default ExplorarComidas;
