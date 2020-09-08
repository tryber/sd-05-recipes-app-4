import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [dataDrink, setDataDrink] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

  const contextValue = {
    dataFood,
    setDataFood,
    dataDrink,
    setDataDrink,
    dataCategory,
    setDataCategory,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export default Provider;
