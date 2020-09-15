import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copyToClipboard from 'clipboard-copy';

import Header from '../../components/Header';

import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.png';

const recipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

const toggleFavorite = (id, setFilteredRecipes, filteredRecipes) => {
  const aux = filteredRecipes.filter((recipe) => recipe.id !== id);
  setFilteredRecipes(aux);
  return localStorage.setItem('favoriteRecipes', JSON.stringify(aux));
};

const mapFavoriteRecipes = (filteredRecipes, setFilteredRecipes) =>
  filteredRecipes.map(({ id, type, area, category, alcoholicOrNot, name, image }, index) => (
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
      <input
        className="done-recipes-btn"
        onClick={() => toggleFavorite(id, setFilteredRecipes, filteredRecipes)}
        id="share-btn"
        data-testid={`${index}-horizontal-favorite-btn`}
        type="image"
        src={blackHeartIcon}
        alt="share icon"
      />
    </div>
  ));

const ReceitasFavoritas = () => {
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
      {mapFavoriteRecipes(filteredRecipes, setFilteredRecipes)}
    </div>
  );
};

export default ReceitasFavoritas;
