import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copyToClipboard from 'clipboard-copy';

import Header from '../../components/Header';

import shareIcon from '../../images/shareIcon.svg';

import './index.css';

const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

const mapDoneRecipes = (filteredRecipes) =>
  filteredRecipes.map(
    ({ id, type, area, category, alcoholicOrNot, name, image, doneDate, tags }, index) => (
      <div>
        <Link to={`/${type}s/${id}`}>
          <img
            className="done-recipes-img"
            data-testid={`${index}-horizontal-image`}
            src={image}
            alt={image}
          />
        </Link>
        {type === 'comida' && (
          <p data-testid={`${index}-horizontal-top-text`}>
            {area} - {category}
          </p>
        )}
        {type === 'bebida' && <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>}
        <Link to={`/${type}s/${id}`}>
          <p data-testid={`${index}-horizontal-name`}>{name}</p>
        </Link>
        <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
        {type === 'comida' && (
          <p>
            <span data-testid={`${index}-${tags[0]}-horizontal-tag`}>{tags[0]}</span>
            <span data-testid={`${index}-${tags[1]}-horizontal-tag`}>{tags[1]}</span>
          </p>
        )}
        <input
          className="done-recipes-btn"
          onClick={() => {
            document.getElementById('share-btn').innerHTML = 'Link copiado!';
            copyToClipboard(`http://localhost:3000/${type}s/${id}`);
          }}
          id="share-btn"
          data-testid={`${index}-horizontal-share-btn`}
          type="image"
          src={shareIcon}
          alt="share icon"
        />
      </div>
    ),
  );

const ReceitasFeitas = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  return (
    <div>
      <Header hideSearch>Receitas Feitas</Header>
      <div>
        <button onClick={() => setFilteredRecipes(recipes)} data-testid="filter-by-all-btn">
          All
        </button>
        <button
          onClick={() => setFilteredRecipes(recipes.filter((recipe) => recipe.type === 'comida'))}
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          onClick={() => setFilteredRecipes(recipes.filter((recipe) => recipe.type === 'bebida'))}
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      {mapDoneRecipes(filteredRecipes)}
    </div>
  );
};

export default ReceitasFeitas;
