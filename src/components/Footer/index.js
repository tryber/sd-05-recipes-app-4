import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';

import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import foodIcon from '../../images/mealIcon.svg';

import './index.css';

const Footer = () => {
  const { setRecipeType } = useContext(AppContext);
  return (
    <footer data-testid="footer">
      <input
        data-testid="drinks-bottom-btn"
        onClick={() => setRecipeType('Drink')}
        src={drinkIcon}
        type="image"
        alt="drink icon"
      />
      <input data-testid="explore-bottom-btn" src={exploreIcon} type="image" alt="explore icon" />
      <input
        data-testid="food-bottom-btn"
        onClick={() => setRecipeType('Food')}
        src={foodIcon}
        type="image"
        alt="food icon"
      />
    </footer>
  );
};
export default Footer;
