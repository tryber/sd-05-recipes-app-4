import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

const Recommend = (props) => {
  const { meal } = props;
  if (meal.length > 0)
    return (
      <Fragment>
        <div className="recom-container">
          <h2 className="recome-title">Recomendadas</h2>
          {meal.map((food) => (
            <div className="recom-img">
              <Link to={`/bebidas/${food.idMeal}`}>
                <img
                  className="thumbnail"
                  data-testid="0-recomendation-card"
                  src={food.strMealThumb}
                  alt="thumbnail da comida"
                />
                <p data-testid="0-recomendation-card">{food.strMeal}</p>
              </Link>
            </div>
          ))}
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
