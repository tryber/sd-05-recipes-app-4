import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

const listmeal = (mealFood) =>
  mealFood.map((meal, index) => (
    <div
      className="recommend-recipe-card"
      key={meal.strMeal}
      data-testid={`${index}-recomendation-card`}
    >
      <Link className="noDecor" to={`/comidas/${meal.idMeal}`}>
        <img className="thumbnail" src={meal.strMealThumb} alt="thumbnail da comida" />
        <p data-testid={`${index}-recomendation-title`}>{meal.strMeal}</p>
      </Link>
    </div>
  ));

const RecommendMeal = (props) => {
  const { meal } = props;
  if (meal.length > 0) {
    return (
      <Fragment>
        <p className="details-subtitle">Recommended</p>
        <div className="recommended-recipes-container">{listmeal(meal)}</div>
      </Fragment>
    );
  }
  return <h1>Loading...</h1>;
};

export default RecommendMeal;

RecommendMeal.propTypes = {
  meal: PropTypes.arrayOf(
    PropTypes.shape({
      strMealThumb: PropTypes.string,
      strMeal: PropTypes.string,
      idMeal: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
