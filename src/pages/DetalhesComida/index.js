import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMealById } from '../../services/MealApi';

// import AppContext from '../../context/AppContext';

import './index.css';

export default function Detalhes(props) {
  const { id } = props.match.params;
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    getMealById(id).then((data) => setMeal(data));
  }, [setMeal, id]);

  console.log(meal);
  return (
    <div className="container">
      <div className="header-container">
        {/* <img
          className="img-header"
          data-testid=""
          src={meal.strMealThumb}
          alt="thumbnail da comida"
        /> */}
        <div className="title-container">
          <h1 className="title" data-testid={meal.strMeal}>
            {meal.strMeal}
          </h1>
          <p className="title-type" data-testid={meal.strMeal}>
            {meal.strArea}
          </p>
        </div>
      </div>

      <div className="instruc-container">
        <p className="instruc">Intructions</p>
        <div className="intruc-div">
          <p>Intructions</p>
        </div>
      </div>

      <div className="recom-container">
        <h2 className="recome-title">Recomendadas</h2>
        <div className="recom-img">
          <Link to={`/comidas/${meal.idMeal}`}>
            <img
              className="thumbnail"
              data-testid="EAways"
              src={meal.strMealThumb}
              alt="thumbnail da comida"
            />
          </Link>
          <p data-testid="Aweays">{meal.strMeal}</p>
        </div>
        <button
          type="button"
          data-testid="login-submit-btn"
          className="start-receip"
          onClick={() => alert('Sumpimpa!')}
          value="Entrar"
        >
          <span className="btn-text">Entrar</span>
        </button>
      </div>
    </div>
  );
}

Detalhes.propTypes = {
  match: PropTypes.shape({ params: PropTypes.string }).isRequired,
};
