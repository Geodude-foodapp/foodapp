import { render } from '@testing-library/react';
import React from 'react';
import SignUp from '../../../src/client/pages/SignUp';

describe('Sign Up Page', () => {
  beforeAll(() => render(<SignUp />));
  it('matches the snapshot', () => {
    const signupPage = document.querySelector('#signup');
    expect(signupPage).toMatchSnapshot();
  });
});
