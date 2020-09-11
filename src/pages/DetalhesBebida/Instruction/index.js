import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Instruction(props) {
  const { Drink } = props;
  return (
    <Fragment>
      <div className="instruc-container">
        <p className="instruc">Intructions</p>
        <div className="intruc-div">
          <p data-testid="instructions">{Drink.strInstructions}</p>
        </div>
        <div data-testid="video">
          <p className="instruc">Video</p>
          <iframe
            id="ytplayer"
            title="video-ins"
            type="text/html"
            width="340"
            height="150"
            src={Drink.strYoutube}
            frameborder="0"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Instruction;

Instruction.propTypes = {
  Drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    idDrink: PropTypes.number.isRequired,
  }).isRequired,
};
