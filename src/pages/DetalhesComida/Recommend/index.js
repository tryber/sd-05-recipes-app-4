import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

const Recommend = (props) => {
  const { drink } = props;
  if (drink.length > 0)
    return (
      <Fragment>
        <div className="recom-container">
          <h2 className="recome-title">Recomendadas</h2>
          {drink.map((drunk) => (
            <div className="recom-img">
              <Link to={`/bebidas/${drunk.idDrink}`}>
                <img
                  className="thumbnail"
                  data-testid="0-recomendation-card"
                  src={drunk.strDrinkThumb}
                  alt="thumbnail da comida"
                />
                <p data-testid="0-recomendation-card">{drunk.strDrink}</p>
              </Link>
            </div>
          ))}
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
