import React, { useContext, useState } from 'react';

import AppContext from '../../context/AppContext';

import { getMealsByName, getMealsByIngredients, getMealsByLetter } from '../../services/MealApi';
import {
  getDrinksByName,
  getDrinksByIngredients,
  getDrinksByLetter,
} from '../../services/DrinkApi';

import './index.css';

const fetchDrinkApi = (target, input, save) => {
  switch (target) {
    case 'name':
      return getDrinksByName(input).then((data) => save(data));
    case 'ing':
      return getDrinksByIngredients(input).then((data) => save(data));
    case 'letter':
      return getDrinksByLetter(input).then((data) => save(data));
    default:
      return -1;
  }
};

const fetchFoodApi = (target, input, save) => {
  switch (target) {
    case 'name':
      return getMealsByName(input).then((data) => save(data));
    case 'ing':
      return getMealsByIngredients(input).then((data) => save(data));
    case 'letter':
      return getMealsByLetter(input).then((data) => save(data));
    default:
      return -1;
  }
};

const searchBtn = (recipeType, target, input, setDataDrink, setDataFood) =>
  (recipeType === 'Food' ? (
    <button
      data-testid="exec-search-btn"
      className="search-btn"
      type="button"
      onClick={() => fetchFoodApi(target, input, setDataFood)}
    >
      Buscar
    </button>
  ) : (
    <button
      data-testid="exec-search-btn"
      className="search-btn"
      type="button"
      onClick={() => fetchDrinkApi(target, input, setDataDrink)}
    >
      Buscar
    </button>
  ));

const SearchBar = () => {
  const [target, setTarget] = useState('name');
  const [input, setInput] = useState('');
  const { setDataFood, setDataDrink, recipeType } = useContext(AppContext);
  return (
    <div className="search-box">
      <input
        data-testid="search-input"
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
        type="text"
      />
      <div>
        <input
          data-testid="ingredient-search-radio"
          onChange={() => setTarget('ing')}
          type="radio"
          id="ing"
          name="target"
        />
        <label htmlFor="ing">Ingredientes</label>
        <input
          data-testid="name-search-radio"
          onChange={() => setTarget('name')}
          type="radio"
          id="nome"
          name="target"
        />
        <label htmlFor="nome">Nome</label>
        <input
          data-testid="first-letter-search-radio"
          onChange={() => setTarget('letter')}
          type="radio"
          id="letra"
          name="target"
        />
        <label htmlFor="letra">Primeira Letra</label>
      </div>
      {searchBtn(recipeType, target, input, setDataDrink, setDataFood)}
    </div>
  );
};

export default SearchBar;
