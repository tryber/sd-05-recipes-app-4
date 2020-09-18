import React from 'react';
import { fireEvent, waitFor, getByTestId } from '@testing-library/react';
import renderWithRouter from '../__render__/renderWithRouter';
import DetalheComida from '../pages/DetalhesComida';

import mealMock from '../../cypress/mocks/oneMeal';

import * as mealApi from '../services/MealApi';

jest.mock('../services/MealApi');

mealApi.getMealById.mockImplementation(() => Promise.resolve(mealMock));

describe('Testes na tela de detalhes da comida', () => {
  it('Renderiza a foto correta no topo da página', async () => {
    const { getByTestId } = renderWithRouter(
      <DetalheComida match={{ params: { id: '52771' } }} />,
      ['/comidas/52771'],
    );
    await waitFor(() => expect(mealApi.getMealById).toHaveBeenCalled());
    const photo = getByTestId('recipe-photo');
    expect(photo.src).toBe('https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg');
  });

  it('O nome da receita aparece corretamente', async () => {
    const { getByTestId } = renderWithRouter(
      <DetalheComida match={{ params: { id: '52771' } }} />,
      ['/comidas/52771'],
    );
    await waitFor(() => expect(mealApi.getMealById).toHaveBeenCalled());
    const title = getByTestId('recipe-title');
    expect(title).toHaveTextContent('Spicy Arrabiata Penne');
  });

  it('A categoria da receita aparece corretamente', async () => {
    const { getByTestId } = renderWithRouter(
      <DetalheComida match={{ params: { id: '52771' } }} />,
      ['/comidas/52771'],
    );
    await waitFor(() => expect(mealApi.getMealById).toHaveBeenCalled());
    const category = getByTestId('recipe-category');
    expect(category).toHaveTextContent('Vegetarian');
  })
});
