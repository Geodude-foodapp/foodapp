import { render } from '@testing-library/react';
import React from 'react';
import RecipeCard from '../../../src/client/components/RecipeCard';

describe('Recipe Card Component', () => {
  beforeAll(() => render(<RecipeCard />));
  it('matches the snapshot', () => {
    const recipeCard = document.querySelector('.recipe-card');
    expect(recipeCard).toMatchSnapshot();
  });
});
