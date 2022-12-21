import { render } from '@testing-library/react';
import React from 'react';
import Search from '../../../src/client/pages/Search';

describe('Sign Up Page', () => {
  beforeAll(() => render(<Search />));
  it('matches the snapshot', () => {
    const searchPage = document.querySelector('#search');
    expect(searchPage).toMatchSnapshot();
  });
});
