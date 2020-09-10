import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './index.css';

export default function Detalhes(props) {
  const { dataFood } = useContext(AppContext);
  const { id } = props.match.params;
  const meal = dataFood.filter((food) => food.idMeal === id);
  console.log(meal);
  return (
    <div className="container">
      <div className="header-container">
        <img
          className="img-header"
          data-testid=""
          src={meal[0].strMealThumb}
          alt="thumbnail da comida"
        />
        <div className="title-container">
          <h1 className="title" data-testid={meal[0].strMeal}>
            {meal[0].strMeal}
          </h1>
          <p className="title-type" data-testid={meal[0].strMeal}>
            {meal[0].strArea}
          </p>
        </div>
      </div>

      <div className="ingredientes-container">
        <p className="title-ingre">Ingredients</p>
        <div className="ingrediente-row">
          <span>{meal[0].strIngredient1}</span>
          <br />
          <span>{meal[0].strIngredient2}</span>
          <br />
          <span>{meal[0].strIngredient3}</span>
          <br />
          <span>{meal[0].strIngredient4}</span>
        </div>
      </div>

      <div className="instruc-container">
        <p className="instruc">Intructions</p>
        <div className="intruc-div">
          <p>Intructions</p>
        </div>
      </div>

      <div className="recom-container">
        <h2 className="recome-title">Recomendadas</h2>
        <div className="recom-img">
          <Link to={`/comidas/${meal[0].idMeal}`}>
            <img
              className="thumbnail"
              data-testid="EAways"
              src={meal[0].strMealThumb}
              alt="thumbnail da comida"
            />
          </Link>
          <p data-testid="Aweays">{meal[0].strMeal}</p>
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
    </div>
  );
}
