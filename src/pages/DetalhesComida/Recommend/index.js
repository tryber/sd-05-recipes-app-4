import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const listDrink = (drinkFood) =>
  drinkFood.map((drink, index) => (
    <div
      className="recommend-recipe-card"
      key={drink.strDrink}
      data-testid={`${index}-recomendation-card`}
    >
      <Link className="noDecor" to={`/bebidas/${drink.idDrink}`}>
        <img className="thumbnail" src={drink.strDrinkThumb} alt="thumbnail da comida" />
        <p data-testid={`${index}-recomendation-title`}>{drink.strDrink}</p>
      </Link>
    </div>
  ));

const RecommendDrink = (props) => {
  const { drink } = props;
  if (drink.length > 0) {
    return (
      <Fragment>
        <p className="details-subtitle">Recommended</p>
        <div className="recommended-recipes-container">{listDrink(drink)}</div>
      </Fragment>
    );
  }
  return <h1>Loading...</h1>;
};

export default RecommendDrink;

RecommendDrink.propTypes = {
  drink: PropTypes.arrayOf(
    PropTypes.shape({
      strMealThumb: PropTypes.string,
      strMeal: PropTypes.string,
      idMeal: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
