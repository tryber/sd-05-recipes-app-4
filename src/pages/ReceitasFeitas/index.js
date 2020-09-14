import React from 'react';
import copyToClipboard from 'clipboard-copy';

import Header from '../../components/Header';

import shareIcon from '../../images/shareIcon.svg';

const mapDoneRecipes = () => {
  const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return recipes.map(
    ({ id, type, area, category, alcoholicOrNot, name, image, doneDate, tags }, index) => {
      if (type === 'comida') {
        return (
          <div>
            <img data-testid={`${index}-horizontal-image`} src={image} alt={image} />
            <p data-testid={`${index}-horizontal-top-text`}>{area} - {category}</p>
            <p data-testid={`${index}-horizontal-name`}>{name}</p>
            <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
            <p>
              <span data-testid={`${index}-${tags[0]}-horizontal-tag`}>{tags[0]}</span>
              <span data-testid={`${index}-${tags[1]}-horizontal-tag`}>{tags[1]}</span>
            </p>
            <input
              data-testid={`${index}-horizontal-share-btn`}
              type="image"
              src={shareIcon}
              alt="share icon"
            />
          </div>
        );
      }
      return (
        <div>
          <img data-testid={`${index}-horizontal-image`} src={image} alt={image} />
          <p data-testid={`${index}-horizontal-name`}>{name}</p>
          <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
          <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
          <input
            type="image"
            src={shareIcon}
            alt="share icon"
            onClick={() => copyToClipboard(`http://localhost:3000/${type}s/${id}`)}
          />
        </div>
      );
    },
  );
};

const ReceitasFeitas = () => {
  const a = 'oi';
  console.log(a)
  return (
    <div>
      <Header hideSearch>Receitas Feitas</Header>
      <div>
        <button data-testid="filter-by-all-btn">All</button>
        <button data-testid="filter-by-food-btn">Food</button>
        <button data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      {mapDoneRecipes()}
    </div>
  );
};

export default ReceitasFeitas;
