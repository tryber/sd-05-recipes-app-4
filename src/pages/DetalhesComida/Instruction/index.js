import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Instruction(props) {
  const { meal } = props;
  console.log(meal.strYoutube)
  return (
    <Fragment>
      <div className="instruc-container">
        <p className="instruc">Intructions</p>
        <div className="intruc-div">
          <p data-testid="instructions">{meal.strInstructions}</p>
        </div>
        <div data-testid="video">
          <p className="instruc">Video</p>
          <iframe width="560" height="315" src={meal.strYoutube && meal.strYoutube.replace('watch?v=', 'embed/')} frameborder="0" allowfullscreen></iframe>
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
