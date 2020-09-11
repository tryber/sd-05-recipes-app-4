import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Instruction(props) {
  const { meal } = props;
  return (
    <Fragment>
      <div className="instruc-container">
        <p className="instruc">Intructions</p>
        <div className="intruc-div">
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Instruction;

Instruction.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.number.isRequired,
  }).isRequired,
};
