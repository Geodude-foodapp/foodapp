import { render } from '@testing-library/react';
import React from 'react';
import UserForm from '../../../src/client/components/UserForm';

const handleSubmit = jest.fn();

describe('Sign Up Form Component', () => {
  beforeAll(() =>
    render(
      <UserForm
        type='Sign Up'
        handleSubmit={handleSubmit}
      />
    )
  );
  it('matches the snapshot', () => {
    const userForm = document.querySelector('#user-form');
    expect(userForm).toMatchSnapshot();
  });
});

describe('Log In Form Component', () => {
  beforeAll(() =>
    render(
      <UserForm
        type='Log In'
        handleSubmit={handleSubmit}
      />
    )
  );
  it('matches the snapshot', () => {
    const userForm = document.querySelector('#user-form');
    expect(userForm).toMatchSnapshot();
  });
});
