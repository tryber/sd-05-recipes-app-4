import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function InstructionDrink(props) {
  const { Drink } = props;
  console.log(Drink)
  return (
    <Fragment>
      <div className="instruc-container">
        <p className="instruc">Intructions</p>
        <div className="intruc-div">
          <p data-testid="instructions">{Drink.strInstructions}</p>
        </div>
      </div>
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
