import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

const Recommend = (props) => (
  <Fragment>
    <div className="recom-container">
      <h2 className="recome-title">Recomendadas</h2>
      <div className="recom-img">
        <Link to={`/comidas/${props.meal.idMeal}`}>
          <img
            className="thumbnail"
            data-testid="EAways"
            src={props.meal.strMealThumb}
            alt="thumbnail da comida"
          />
        </Link>
        <p data-testid="Aweays">{props.meal.strMeal}</p>
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
  </Fragment>
);

export default Recommend;

Recommend.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};
