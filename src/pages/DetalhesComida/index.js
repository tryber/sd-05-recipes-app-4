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
        <div className="">
          <h1 className="title" data-testid={meal[0].strMeal}>
            {meal[0].strMeal}
          </h1>
          <p className="title-type" data-testid={meal[0].strMeal}>
            {meal[0].strArea}
          </p>
        </div>
        <div className="fav-container"></div>
      </div>
      <div className="ingredientes-container">
        <h2 className="ingredientes">Ingredients</h2>

        <span>{meal[0].strIngredient1}</span>
        <br />
        <span>{meal[0].strIngredient2}</span>
        <br />
        <span>{meal[0].strIngredient3}</span>
        <br />
        <span>{meal[0].strIngredient4}</span>
        <br />
      </div>
      <div>
        <h2 className="intructions">Intructions</h2>
        <div>
          <p className="intructions-p">Intructions</p>
          <br />
        </div>
      </div>
      <div>
        <h2 className="recomendada">Recomendadas</h2>
        <div className="img-recomendada">
          <Link to={`/comidas/${meal[0].idMeal}`}>
            <img
              className="img-cards"
              data-testid="EAways"
              src={meal[0].strMealThumb}
              alt="thumbnail da comida"
            />
          </Link>
          <p data-testid="Aweays">{meal[0].strMeal}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          data-testid="login-submit-btn"
          className="start-receip"
          onClick={() => alert('Sumpimpa!')}
          value="Entrar"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
