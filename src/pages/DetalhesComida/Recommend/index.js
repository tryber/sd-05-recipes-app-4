import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

const listDrink = (drinkFood) =>
  drinkFood.map((drink, index) => (
    <div className="recipe-card" key={drink.strDrink} data-testid={`${index}-recomendation-card-ct`}>
      <Link to={`/bebidas/${drink.idDrink}`}>
        <img
          className="thumbnail"
          data-testid={`${index}-recomendation-card`}
          src={drink.strDrinkThumb}
          alt="thumbnail da comida"
        />
        <p data-testid={`${index}-recomendation-card`}>{drink.strDrink}</p>
      </Link>
    </div>
  ));

const Recommend = (props) => {
  const { drink } = props;
  if (drink.length > 0)
    return (
      <Fragment>
        <h2 className="recome-title">Recomendadas</h2>
        <div className="recipes-container">
          {listDrink(drink)}
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
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};
