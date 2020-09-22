import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copyToClipboard from 'clipboard-copy';

import Header from '../../components/Header';

import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const recipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

const toggleFavorite = (id, setFavoritedRecipes, favoritedRecipes) => {
  const aux = favoritedRecipes.filter((recipe) => recipe.id !== id);
  setFavoritedRecipes(aux);
  return localStorage.setItem('favoriteRecipes', JSON.stringify(aux));
};

const mapFavoriteRecipes = (favoritedRecipes, setFavoritedRecipes) =>
  favoritedRecipes.map(({ id, type, area, category, alcoholicOrNot, name, image }, index) => (
    <div className="recipe-card-2">
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
        <p data-testid={`${index}-horizontal-name`} className="noDecor">{name}</p>
      </Link>
      <div className="spaceA">
        <input
          className="done-recipes-btn"
          onClick={() => {
            copyToClipboard(`http://localhost:3000/${type}s/${id}`);
            document.getElementById('share-btn').innerHTML = 'Link copiado!';
          }}
          id="share-btn"
          data-testid={`${index}-horizontal-share-btn`}
          type="image"
          src={shareIcon}
          alt="share icon"
        />
        <input
          className="done-recipes-btn"
          onClick={() => toggleFavorite(id, setFavoritedRecipes, favoritedRecipes)}
          id="share-btn"
          data-testid={`${index}-horizontal-favorite-btn`}
          type="image"
          src={blackHeartIcon}
          alt="share icon"
        />
      </div>
    </div>
  ));

const ReceitasFavoritas = () => {
  const [favoritedRecipes, setFavoritedRecipes] = useState(recipes);
  return (
    <div>
      <Header hideSearch>favorite recipes</Header>
      <div className="btnsAll">
        <button
          className="drkBtn"
          onClick={() => setFavoritedRecipes(recipes)}
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          className="drkBtn"
          onClick={() => setFavoritedRecipes(recipes.filter((recipe) => recipe.type === 'comida'))}
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          className="drkBtn"
          onClick={() => setFavoritedRecipes(recipes.filter((recipe) => recipe.type === 'bebida'))}
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      <div className="recipes-container explore">
        {mapFavoriteRecipes(favoritedRecipes, setFavoritedRecipes)}
      </div>
    </div>
  );
};

export default ReceitasFavoritas;
