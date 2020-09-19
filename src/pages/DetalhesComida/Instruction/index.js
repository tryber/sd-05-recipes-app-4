import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Instruction(props) {
  const { meal } = props;
  return (
    <Fragment>
      <p className="details-subtitle">Intructions</p>
      <p className="instructions" data-testid="instructions">
        {meal.strInstructions}
      </p>
      <p className="details-subtitle">Video</p>
      <iframe
        className="iframe"
        title="instructions"
        src={meal.strYoutube && meal.strYoutube.replace('watch?v=', 'embed/')}
        frameBorder="0"
        allowFullScreen
      />
    </Fragment>
  );
}

export default Instruction;

Instruction.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};
