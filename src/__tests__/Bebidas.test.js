import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import renderWithRouter from '../__render__/renderWithRouter';
import Provider from '../context/AppProvider';
import Bebidas from '../pages/Bebidas';

import drinksMock from '../../cypress/mocks/drinks';
import ordinaryMock from '../../cypress/mocks/ordinaryDrinks';
import cocktailMock from '../../cypress/mocks/cocktailDrinks';
import milkMock from '../../cypress/mocks/milkDrinks';
import otherMock from '../../cypress/mocks/otherDrinks';
import cocoaMock from '../../cypress/mocks/cocoaDrinks';

import categoriesMock from '../../cypress/mocks/drinkCategories';

import * as drinkApi from '../services/DrinkApi';

jest.mock('../services/DrinkApi');

drinkApi.getDrinksCategories.mockImplementation(() => Promise.resolve(categoriesMock));

const apiDataMock = (mockDrinksValue) => {
  drinkApi.getDrinks.mockImplementationOnce(() => Promise.resolve(mockDrinksValue));
};

const mockDrinkByCategory = (mockDrinksValue) => {
  drinkApi.getDrinksByCategory.mockImplementationOnce(() => Promise.resolve(mockDrinksValue));
};

afterEach(() => {
  drinkApi.getDrinks.mockClear();
  drinkApi.getDrinksByCategory.mockClear();
});

describe('Testes na tela de bebida', () => {
  it('Verificando se tem os 12 cards na tela de bebidas', async () => {
    apiDataMock(drinksMock);
    const { getByTestId } = renderWithRouter(
      <Provider>
        <Bebidas />
      </Provider>,
      ['/bebidas'],
    );
    await waitFor(() => expect(drinkApi.getDrinks).toHaveBeenCalled());
    await waitFor(() => expect(drinkApi.getDrinksCategories).toHaveBeenCalled());
    [
      'GG',
      'A1',
      'ABC',
      'Kir',
      '747',
      '252',
      'Ace',
      'Adam',
      'B-53',
      'AT&T',
      'ACID',
      'B-52',
    ].forEach((title, index) => expect(getByTestId(`${index}-card-name`)).toHaveTextContent(title));
  });

  it('Ao clicar em uma categoria, faz a busca por bebidas desta categoria', async () => {
    apiDataMock(drinksMock);
    mockDrinkByCategory(ordinaryMock);
    mockDrinkByCategory(cocktailMock);
    mockDrinkByCategory(milkMock);
    mockDrinkByCategory(otherMock);
    mockDrinkByCategory(cocoaMock);
    const { getByTestId } = renderWithRouter(
      <Provider>
        <Bebidas />
      </Provider>,
      ['/bebidas'],
    );
    await waitFor(() => expect(drinkApi.getDrinks).toHaveBeenCalled());
    await waitFor(() => expect(drinkApi.getDrinksCategories).toHaveBeenCalled());
    const firstCardImg = getByTestId('0-card-img');
    expect(firstCardImg.src).toBe(
      'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    );

    const ordinaryBtn = getByTestId('Ordinary Drink-category-filter');
    fireEvent.click(ordinaryBtn);
    await waitFor(() => expect(drinkApi.getDrinksByCategory).toHaveBeenCalledTimes(1));
    const firstOrdinaryCardImg = getByTestId('0-card-img');
    expect(firstOrdinaryCardImg.src).toBe(
      'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg',
    );

    const cocktailBtn = getByTestId('Cocktail-category-filter');
    fireEvent.click(cocktailBtn);
    await waitFor(() => expect(drinkApi.getDrinksByCategory).toHaveBeenCalledTimes(2));
    const firstcocktailCardImg = getByTestId('0-card-img');
    expect(firstcocktailCardImg.src).toBe('https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg');

    const milkBtn = getByTestId('Milk / Float / Shake-category-filter');
    fireEvent.click(milkBtn);
    await waitFor(() => expect(drinkApi.getDrinksByCategory).toHaveBeenCalledTimes(3));
    const firstMilkCardImg = getByTestId('0-card-img');
    expect(firstMilkCardImg.src).toBe(
      'https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg',
    );

    const otherBtn = getByTestId('Other/Unknown-category-filter');
    fireEvent.click(otherBtn);
    await waitFor(() => expect(drinkApi.getDrinksByCategory).toHaveBeenCalledTimes(4));
    const firstOtherCardImg = getByTestId('0-card-img');
    expect(firstOtherCardImg.src).toBe(
      'https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg',
    );

    const cocoaBtn = getByTestId('Cocoa-category-filter');
    fireEvent.click(cocoaBtn);
    await waitFor(() => expect(drinkApi.getDrinksByCategory).toHaveBeenCalledTimes(5));
    const firstCocoaCardImg = getByTestId('0-card-img');
    expect(firstCocoaCardImg.src).toBe(
      'https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg',
    );
  });

  it('Ao pressionar o mesmo botão da categoria, o app volta a mostrar todas as bebidas sem filtro', async () => {
    apiDataMock(drinksMock);
    mockDrinkByCategory(ordinaryMock);
    apiDataMock(drinksMock);
    const { getByTestId } = renderWithRouter(
      <Provider>
        <Bebidas />
      </Provider>,
      ['/bebidas'],
    );
    await waitFor(() => expect(drinkApi.getDrinks).toHaveBeenCalled());
    await waitFor(() => expect(drinkApi.getDrinksCategories).toHaveBeenCalled());
    const firstCardImg = getByTestId('0-card-img');
    expect(firstCardImg.src).toBe(
      'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    );

    const ordinaryBtn = getByTestId('Ordinary Drink-category-filter');
    fireEvent.click(ordinaryBtn);
    await waitFor(() => expect(drinkApi.getDrinksByCategory).toHaveBeenCalled());
    const firstOrdinaryCardImg = getByTestId('0-card-img');
    expect(firstOrdinaryCardImg.src).toBe(
      'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg',
    );

    fireEvent.click(ordinaryBtn);
    await waitFor(() => expect(drinkApi.getDrinks).toHaveBeenCalledTimes(2));
    const checkCardImg = getByTestId('0-card-img');
    expect(checkCardImg.src).toBe(
      'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    );
  });
});
