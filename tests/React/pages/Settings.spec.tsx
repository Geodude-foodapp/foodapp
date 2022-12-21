import { render } from '@testing-library/react';
import React from 'react';
import Settings from '../../../src/client/pages/Settings';

describe('Settings Page', () => {
  beforeAll(() => render(<Settings />));
  it('matches the snapshot', () => {
    const settingsPage = document.querySelector('#settings');
    expect(settingsPage).toMatchSnapshot();
  });
});
