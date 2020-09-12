import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

const listMeal = (MealFood) =>
  MealFood.map((Meal, index) => (
    <div
      className="recipe-card"
      key={Meal.strMeal}
      data-testid={`${index}-recomendation-card-ct`}
    >
      <Link to={`/comidas/${Meal.idMeal}`}>
        <img
          className="thumbnail"
          data-testid={`${index}-recomendation-card`}
          src={Meal.strMealThumb}
          alt="thumbnail da comida"
        />
        <p data-testid={`${index}-recomendation-card`}>{Meal.strMeal}</p>
      </Link>
    </div>
  ));

const Recommend = (props) => {
  const { meal } = props;
  if (meal.length > 0)
    return (
      <Fragment>
        <h2 className="recome-title">Recomendadas</h2>
          <div className="recipes-container">
          {listMeal(meal)}
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="start-receip"
            onClick={() => alert('Sumpimpa!')}
            value="Entrar"
          >
            <span className="btn-text">Entrar</span>
          </button>
        </div>
      </Fragment>
    );
  return <h1>Loading...</h1>;
};

export default Recommend;

Recommend.propTypes = {
  Drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
};
