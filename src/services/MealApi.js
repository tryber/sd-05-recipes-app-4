const MEAL_API = 'https://www.themealdb.com/api/json/v1/1/';

export const getMealsByName = (name) => {
  const URL = `${MEAL_API}search.php?s=${name}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

// getMealsByName('Lemon').then((data) => data)

export const getMealsCategories = () => {
  const URL = `${MEAL_API}list.php?c=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

// getMealsCateries().then((data) => data)

export const getMealsIngredients = () => {
  const URL = `${MEAL_API}list.php?i=list`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

// getMealsIngredients().then((data) => data)

export const getRandomMeals = () => {
  const URL = `${MEAL_API}random.php`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

// getRandomMeals().then((data) => data)