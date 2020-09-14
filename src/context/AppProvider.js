import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [foodCategory, setFoodCategory] = useState(false);
  const [drinkCategory, setDrinkCategory] = useState(false);
  const [dataFoodCategories, setDataFoodCategories] = useState([]);
  const [dataDrinkCategories, setDataDrinkCategories] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [recipeType, setRecipeType] = useState('Food');
  const [shareBebidas, setShareBebidas] = useState('');
  const [shareComidas, setShareComidas] = useState('');

  const contextValue = {
    dataFood,
    setDataFood,
    dataDrink,
    setDataDrink,
    foodCategory,
    setFoodCategory,
    drinkCategory,
    setDrinkCategory,
    dataDrinkCategories,
    setDataDrinkCategories,
    dataFoodCategories,
    setDataFoodCategories,
    recipeType,
    setRecipeType,
    shareBebidas,
    setShareBebidas,
    shareComidas,
    setShareComidas,
  };
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
