import { render } from '@testing-library/react';
import React from 'react';
import LogIn from '../../../src/client/pages/LogIn';

describe('LogIn Page', () => {
  beforeAll(() => render(<LogIn />));
  it('matches the snapshot', () => {
    const loginPage = document.querySelector('#login');
    expect(loginPage).toMatchSnapshot();
  });
});
