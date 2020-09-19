import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../../images/logo.png';
import AppContext from '../../context/AppContext';

import { getDrinksCategories } from '../../services/DrinkApi';
import { getMealsCategories } from '../../services/MealApi';

import './index.css';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [clickOk, setClickOk] = useState(false);
  const { setDataDrinkCategories, setDataFoodCategories } = useContext(AppContext);
  useEffect(() => {}, [setDataFoodCategories]);
  useEffect(() => {
    getMealsCategories().then((data) => setDataFoodCategories(data.meals.slice(0, 5)));
    getDrinksCategories().then((data) => setDataDrinkCategories(data.drinks.slice(0, 5)));
  }, [setDataDrinkCategories, setDataFoodCategories]);
  const emailregex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  const clickSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ email: Email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    setClickOk(true);
  };
  return (
    <div>
      {clickOk && <Redirect to="/comidas" />}
      <img className="img" src={logo} alt="tryoutLogo" />
      <form>
        <input
          data-testid="email-input"
          className="email"
          type="email"
          name="email"
          placeholder=" E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          data-testid="password-input"
          className="password"
          type="password"
          name="password"
          placeholder=" Password"
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          className="login-btn"
          disabled={!(Email.match(emailregex) && senha.length > 6)}
          onClick={() => clickSubmit()}
          value="Entrar"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
