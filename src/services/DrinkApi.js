const DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const getDrinksByName = (name) => {
  const URL = `${DRINK_API}search.php?s=${name}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

// getDrinksByName('Lemon').then((data) => data)

export const getDrinksCategories = () => {
  const URL = `${DRINK_API}list.php?c=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

// getDrinksCateries().then((data) => data)

export const getDrinksIngredients = () => {
  const URL = `${DRINK_API}list.php?i=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

// getDrinksIngredients().then((data) => data)

export const getRandomDrinks = () => {
  const URL = `${DRINK_API}random.php`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

// getRandomDrinks().then((data) => data)