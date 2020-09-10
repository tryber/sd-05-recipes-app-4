import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Header (props) {
  return (
    <Fragment>
      <div className="header-container">
        <img
          className="img-header"
          data-testid=""
          src={props.meal.strMealThumb}
          alt="thumbnail da comida"
        />
        <div className="title-container">
          <h1 className="title" data-testid={props.meal.strMeal}>
            {props.meal.strMeal}
          </h1>
          <p className="title-type" data-testid={props.meal.strMeal}>
            {props.meal.strArea}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Header.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strArea: PropTypes.string,
}).isRequired,
};
