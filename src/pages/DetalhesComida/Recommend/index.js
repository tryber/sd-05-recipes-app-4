import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

const listDrink = (drinkFood) =>
  drinkFood.map((drink, index) => (
    <div className="recipe-card" key={drink.strDrink} data-testid={`${index}-recomendation-card`}>
      <Link to={`/bebidas/${drink.idDrink}`}>
        <img className="thumbnail" src={drink.strDrinkThumb} alt="thumbnail da comida" />
        <p data-testid={`${index}-recomendation-title`}>{drink.strDrink}</p>
      </Link>
    </div>
  ));

const RecommendMeal = (props) => {
  const { drink } = props;
  if (drink.length > 0) {
    return (
      <Fragment>
        <h2 className="recome-title">Recomendadas</h2>
        <div className="recommended-recipes-container">{listDrink(drink)}</div>
      </Fragment>
    );
  }
  return <h1>Loading...</h1>;
};

export default RecommendMeal;

RecommendMeal.propTypes = {
  drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
};
