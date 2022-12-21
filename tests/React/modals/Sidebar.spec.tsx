import { render } from '@testing-library/react';
import React from 'react';
import Sidebar from '../../../src/client/modals/Sidebar';

describe('Recipe Card Component', () => {
  const closeSidebar = jest.fn();
  beforeAll(() => render(<Sidebar closeSidebar={closeSidebar} />));
  it('matches the snapshot', () => {
    const sidebar = document.querySelector('#sidebar');
    expect(sidebar).toMatchSnapshot();
  });
});
