import React, { Fragment } from 'react';
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
