import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import renderWithRouter from '../__render__/renderWithRouter';
import Provider from '../context/AppProvider';
import Comidas from '../pages/Comidas';

import mealsMock from '../../cypress/mocks/meals';
import beefMock from '../../cypress/mocks/beefMeals';
import breakFastMock from '../../cypress/mocks/breakfastMeals';
import chickenMock from '../../cypress/mocks/chickenMeals';
import dessertMock from '../../cypress/mocks/dessertMeals';
import goatMock from '../../cypress/mocks/goatMeals';

import categoriesMock from '../../cypress/mocks/mealCategories';

import * as mealApi from '../services/MealApi';

jest.mock('../services/MealApi');

mealApi.getMealsCategories.mockImplementation(() => Promise.resolve(categoriesMock));

const apiDataMock = (mockMealsValue) => {
  mealApi.getMeals.mockImplementationOnce(() => Promise.resolve(mockMealsValue));
};

const mockMealByCategory = (mockMealsValue) => {
  mealApi.getMealsByCategory.mockImplementationOnce(() => Promise.resolve(mockMealsValue));
};

afterEach(() => {
  mealApi.getMeals.mockClear();
  mealApi.getMealsByCategory.mockClear();
});

describe('Testes na tela de comida', () => {
  it('Verificando se tem os 12 cards na tela de comidas', async () => {
    apiDataMock(mealsMock);
    const { getByTestId } = renderWithRouter(
      <Provider>
        <Comidas />
      </Provider>,
      ['/comidas'],
    );
    await waitFor(() => expect(mealApi.getMeals).toHaveBeenCalled());
    await waitFor(() => expect(mealApi.getMealsCategories).toHaveBeenCalled());
    [
      'Corba',
      'Kumpir',
      'Dal fry',
      'Poutine',
      'Lasagne',
      'Timbits',
      'Wontons',
      'Kafteji',
      'Big Mac',
      'Kapsalon',
      'Fish pie',
      'Pancakes',
    ].forEach((title, index) => expect(getByTestId(`${index}-card-name`)).toHaveTextContent(title));
  });

  it('Ao clicar em uma categoria, faz a busca por comidas desta categoria', async () => {
    apiDataMock(mealsMock);
    mockMealByCategory(beefMock);
    mockMealByCategory(breakFastMock);
    mockMealByCategory(chickenMock);
    mockMealByCategory(dessertMock);
    mockMealByCategory(goatMock);
    const { getByTestId } = renderWithRouter(
      <Provider>
        <Comidas />
      </Provider>,
      ['/comidas'],
    );
    await waitFor(() => expect(mealApi.getMeals).toHaveBeenCalled());
    await waitFor(() => expect(mealApi.getMealsCategories).toHaveBeenCalled());
    const firstCardImg = getByTestId('0-card-img');
    expect(firstCardImg.src).toBe(
      'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
    );

    const beefBtn = getByTestId('Beef-category-filter');
    fireEvent.click(beefBtn);
    await waitFor(() => expect(mealApi.getMealsByCategory).toHaveBeenCalledTimes(1));
    const firstBeefCardImg = getByTestId('0-card-img');
    expect(firstBeefCardImg.src).toBe(
      'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
    );

    const breakfastBtn = getByTestId('Breakfast-category-filter');
    fireEvent.click(breakfastBtn);
    await waitFor(() => expect(mealApi.getMealsByCategory).toHaveBeenCalledTimes(2));
    const firstBFCardImg = getByTestId('0-card-img');
    expect(firstBFCardImg.src).toBe('https://www.themealdb.com/images/media/meals/1550441882.jpg');

    const chickenBtn = getByTestId('Chicken-category-filter');
    fireEvent.click(chickenBtn);
    await waitFor(() => expect(mealApi.getMealsByCategory).toHaveBeenCalledTimes(3));
    const firstChickenCardImg = getByTestId('0-card-img');
    expect(firstChickenCardImg.src).toBe(
      'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
    );

    const dessertBtn = getByTestId('Dessert-category-filter');
    fireEvent.click(dessertBtn);
    await waitFor(() => expect(mealApi.getMealsByCategory).toHaveBeenCalledTimes(4));
    const firstDessertCardImg = getByTestId('0-card-img');
    expect(firstDessertCardImg.src).toBe(
      'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
    );

    const goatBtn = getByTestId('Goat-category-filter');
    fireEvent.click(goatBtn);
    await waitFor(() => expect(mealApi.getMealsByCategory).toHaveBeenCalledTimes(5));
    const firstGoatCardImg = getByTestId('0-card-img');
    expect(firstGoatCardImg.src).toBe(
      'https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg',
    );
  });

  it('Ao pressionar o mesmo botão da categoria, o app volta a mostrar todas as comidas sem filtro', async () => {
    apiDataMock(mealsMock);
    mockMealByCategory(beefMock);
    apiDataMock(mealsMock);
    const { getByTestId } = renderWithRouter(
      <Provider>
        <Comidas />
      </Provider>,
      ['/comidas'],
    );
    await waitFor(() => expect(mealApi.getMeals).toHaveBeenCalled());
    await waitFor(() => expect(mealApi.getMealsCategories).toHaveBeenCalled());
    const firstCardImg = getByTestId('0-card-img');
    expect(firstCardImg.src).toBe(
      'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
    );

    const beefBtn = getByTestId('Beef-category-filter');
    fireEvent.click(beefBtn);
    await waitFor(() => expect(mealApi.getMealsByCategory).toHaveBeenCalled());
    const firstBeefCardImg = getByTestId('0-card-img');
    expect(firstBeefCardImg.src).toBe(
      'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
    );

    fireEvent.click(beefBtn);
    await waitFor(() => expect(mealApi.getMeals).toHaveBeenCalledTimes(2));
    const checkCardImg = getByTestId('0-card-img');
    expect(checkCardImg.src).toBe(
      'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
    );
  });
});
