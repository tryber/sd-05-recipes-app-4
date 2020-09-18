import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
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
  });

  it('As intruções aparecem corretamente', async () => {
    const { getByTestId } = renderWithRouter(
      <DetalheComida match={{ params: { id: '52771' } }} />,
      ['/comidas/52771'],
    );
    await waitFor(() => expect(mealApi.getMealById).toHaveBeenCalled());
    const instructions = getByTestId('instructions');
    expect(instructions).toHaveTextContent(
      'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.',
    );
  });

  it('Ao pressionar o botão de iniciar receita, a página é redirecionada para a página correta', async () => {
    const { history, getByTestId } = renderWithRouter(
      <DetalheComida match={{ params: { id: '52771' } }} />,
      ['/comidas/52771'],
    );
    await waitFor(() => expect(mealApi.getMealById).toHaveBeenCalled());
    const btn = getByTestId('start-recipe-btn');
    fireEvent.click(btn);
    expect(history.location.pathname).toBe('/comidas/52771/in-progress');
  });
});
