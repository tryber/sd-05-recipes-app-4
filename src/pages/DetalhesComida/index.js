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

const handleProgress = (id) => {
  const store = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    meals: { [id]: [] },
    cocktails: {},
  };
  if (!store.meals[id]) {
    const inProgressRecipes = { meals: { ...store.meals, [id]: [] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify(store));
  }
};

export default function DetalhesComida(props) {
  const { id } = props.match.params;
  const [meal, setMeal] = useState({});
  const [receipDone, setRecipeDone] = useState(false);
  const { receipProgress, setReceipProgress } = useContext(AppContext);
  useEffect(() => { getMealById(id).then((data) => setMeal(data.meals[0])); }, [setMeal, id]);
  const [drink, setdrink] = useState([]);
  useEffect(() => { getDrinks().then((data) => setdrink(data.drinks.slice(0, 6))); }, [setdrink]);
  useEffect(() => {
    const itemProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const itemDone = JSON.parse(localStorage.getItem('doneRecipes'));
    if (itemProgress !== null && itemProgress.meals !== undefined) {
      const progress = Object.keys(itemProgress.meals);
      setReceipProgress(progress[0] === meal.idMeal);
    }
    if (itemDone !== null) setRecipeDone(itemDone.some((el) => el.id === meal.idMeal));
  }, [setReceipProgress, meal]);
  return (
    <Fragment>
      <img
        className="details-thumbnail"
        data-testid="recipe-photo"
        src={meal.strMealThumb}
        alt="thumbnail da comida"
      />
      <div className="details-container">
        <Header meal={meal} />
        <Ingredients meal={meal} />
        <Instruction meal={meal} />
        <Recommend drink={drink} />
      </div>
      {!receipDone && (
        <Link to={`/comidas/${meal.idMeal}/in-progress`}>
          <button
            type="button" data-testid="start-recipe-btn"
            className="fixed" onClick={() => handleProgress()}
          >{!receipProgress ? 'Start Recipe' : 'Continue Recipe'}</button>
        </Link>
      )}
    </Fragment>
  );
}

DetalhesComida.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};
