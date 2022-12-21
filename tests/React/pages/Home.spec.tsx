import { render } from '@testing-library/react';
import React from 'react';
import Home from '../../../src/client/pages/Home';

describe('Home Page', () => {
  beforeAll(() => render(<Home />));
  it('matches the snapshot', () => {
    const homePage = document.querySelector('#home');
    expect(homePage).toMatchSnapshot();
  });
});
