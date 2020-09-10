import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Header = ({ meal }) => (
  <Fragment>
    <div className="header-container">
      <img
        className="img-header"
        data-testid=""
        src={meal.strMealThumb}
        alt="thumbnail da comida"
      />
      <div className="title-container">
        <h1 className="title" data-testid={meal.strMeal}>
          {meal.strMeal}
        </h1>
        <p className="title-type" data-testid={meal.strMeal}>
          {meal.strArea}
        </p>
      </div>
    </div>
  </Fragment>
);

export default Header;

Header.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
};
