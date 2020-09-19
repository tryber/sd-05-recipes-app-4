import React, { useEffect, useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMeals } from '../../services/MealApi';
import { getDrinkById } from '../../services/DrinkApi';
import AppContext from '../../context/AppContext';
import Header from './Header';
import Instruction from './Instruction';
import Recommend from './Recommend';
import Ingredients from './Ingredients';
import './index.css';

export default function DetalhesBebidas(props) {
  const { id } = props.match.params;
  const [drink, setDrink] = useState({});
  const [receipDone, setRecipeDone] = useState(false);
  const { receipProgress, setReceipProgress } = useContext(AppContext);
  useEffect(() => {
    getDrinkById(id).then((data) => setDrink(data.drinks[0]));
  }, [setDrink, id]);
  const [meal, setmeal] = useState([]);
  useEffect(() => {
    getMeals().then((data) => setmeal(data.meals.slice(0, 6)));
  }, [setmeal]);
  const handleProgress = () => {
    const store = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    const inProgressRecipe = { ...store, cocktails: { ...store.cocktails, [drink.idDrink]: [] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipe));
  };
  useEffect(() => {
    const itemProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const itemDone = JSON.parse(localStorage.getItem('doneRecipes'));
    if (itemProgress !== null && itemProgress.cocktails !== undefined) {
      const progress = Object.keys(itemProgress.cocktails);
      setReceipProgress(progress[0] === drink.idDrink);
    }
    if (itemDone !== null) setRecipeDone(itemDone.some((el) => el.id === drink.idDrink));
  }, [setReceipProgress, drink]);
  return (
    <Fragment>
      <img
        className="details-thumbnail"
        data-testid="recipe-photo"
        src={drink.strDrinkThumb}
        alt="thumbnail da comida"
      />
      <div className="details-container">
        <Header Drink={drink} />
        <Ingredients Drink={drink} />
        <Instruction Drink={drink} />
        <Recommend meal={meal} />
        {!receipDone && (
          <Link className="start-recipe" to={`/bebidas/${drink.idDrink}/in-progress`}>
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="start-recipe"
              onClick={() => handleProgress()}
            >
              <span className="btn-text">
                {!receipProgress ? 'Iniciar Receita' : 'Continuar Receita'}
              </span>
            </button>
          </Link>
        )}
      </div>
    </Fragment>
  );
}

DetalhesBebidas.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
