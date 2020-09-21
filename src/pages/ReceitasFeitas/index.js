import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copyToClipboard from 'clipboard-copy';

import Header from '../../components/Header';

import shareIcon from '../../images/shareIcon.svg';

import './index.css';

const mapDoneRecipes = (filteredRecipes) =>
  filteredRecipes.map(
    ({ id, type, area, category, alcoholicOrNot, name, image, doneDate, tags }, index) => (
      <div className="recipe-card-2">
        <Link to={`/${type}s/${id}`}>
          <img
            className="thumbnail2"
            data-testid={`${index}-horizontal-image`}
            src={image}
            alt={image}
          />
        </Link>
        {type === 'comida' && (
          <p data-testid={`${index}-horizontal-top-text`} className="noDecor">
            {area} - {category}
          </p>
        )}
        {type === 'bebida' && <p data-testid={`${index}-horizontal-top-text`} className="noDecor">{alcoholicOrNot}</p>}
        <Link to={`/${type}s/${id}`} className="noDecor">
          <p className="noDecor" data-testid={`${index}-horizontal-name`}>{name}</p>
        </Link>
        <p data-testid={`${index}-horizontal-done-date`} className="noDecor">{doneDate}</p>
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
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setRecipes(storage);
    setFilteredRecipes(storage);
  }, [setFilteredRecipes, setRecipes]);
  return (
    <div>
      <Header hideSearch>done recipes</Header>
      <div className="btnsAll">
        <button className="drkBtn" onClick={() => setFilteredRecipes(recipes)} data-testid="filter-by-all-btn">
          All
        </button>
        <button
          className="drkBtn"
          onClick={() => setFilteredRecipes(recipes.filter((recipe) => recipe.type === 'comida'))}
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          className="drkBtn"
          onClick={() => setFilteredRecipes(recipes.filter((recipe) => recipe.type === 'bebida'))}
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      <div className="recipes-container explore">
        {mapDoneRecipes(filteredRecipes)}
      </div>
    </div>
  );
};

export default ReceitasFeitas;
