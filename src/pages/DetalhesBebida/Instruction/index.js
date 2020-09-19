import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function InstructionDrink(props) {
  const { Drink } = props;
  return (
    <Fragment>
      <p className="details-subtitle">Intructions</p>
      <p className="instructions" data-testid="instructions">{Drink.strInstructions}</p>
    </Fragment>
  );
}

export default InstructionDrink;

InstructionDrink.propTypes = {
  Drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
};
