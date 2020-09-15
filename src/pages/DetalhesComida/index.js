import React, { useEffect, useState, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMealById } from '../../services/MealApi';
import { getDrinks } from '../../services/DrinkApi';
import AppContext from '../../context/AppContext';
import Header from './Header';
import Instruction from './Instruction';
import Recommend from './Recommend';
import Ingredients from './Ingredients';
import './index.css';

export default function DetalhesComida(props) {
  const { id } = props.match.params;
  const [meal, setMeal] = useState({});
  const {
    receipProgress,
    setReceipProgress,
    receipDone,
    setReceipDone,
  } = useContext(AppContext);

  useEffect(() => {
    getMealById(id).then((data) => setMeal(data.meals[0]));
  }, [setMeal, id]);

  const [drink, setdrink] = useState([]);
  useEffect(() => {
    getDrinks().then((data) => setdrink(data.drinks.slice(0, 6)));
  }, [setdrink]);

  const handleProgress = () => {
    const inProgressRecipes = {
      meals: {
        [meal.idMeal]: [],
      },
    };
    localStorage.setItem(
      'inProgressRecipes',
      JSON.stringify(inProgressRecipes)
    );
  };

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const itemDone = JSON.parse(localStorage.getItem('doneRecipes'));

    if(item !== null && item.meals !== undefined) {
      setReceipProgress(item.meals.hasOwnProperty(meal.idMeal));
    }

    if(itemDone !== null) {
      setReceipDone(itemDone.id === meal.idMeal);
   }
  });

  return (
    <Fragment>
      <div className="container">
        <Header meal={meal} />
        <Ingredients meal={meal} />
        <Instruction meal={meal} />
        <Recommend drink={drink} />
        { !receipDone &&
        <Link className='start-recipe' to={`/comidas/${meal.idMeal}/in-progress`}>
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
        }
      </div>
    </Fragment>
  );
}

DetalhesComida.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
};
