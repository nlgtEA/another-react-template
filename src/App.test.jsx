import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import AppRoutes from './AppRoutes';

const setup = () => {
  const user = userEvent.setup();
  render(<RouterProvider router={createMemoryRouter(AppRoutes)} />);

  return {
    user,
  };
};

// JSDom will print out an error if you try to use the <Link> component in testing
// It's fine to ignore it
// See more:
// https://github.com/remix-run/react-router/issues/9951
// https://github.com/jsdom/jsdom/issues/2112

describe('App', () => {
  it('renders correctly', () => {
    setup();
    expect(screen.getByText('Root')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about',
    );
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '/contact',
    );
  });

  describe('User clicks on about link', () => {
    it('renders about page', async () => {
      const { user } = setup();

      user.click(screen.getByRole('link', { name: 'About' }));
      expect(await screen.findByRole('heading', 'About')).toBeInTheDocument();
    });
  });

  describe('User clicks on contact link', () => {
    it('renders contact page', async () => {
      const { user } = setup();

      user.click(screen.getByRole('link', { name: 'Contact' }));
      expect(
        await screen.findByRole('heading', { name: 'Contact' }),
      ).toBeInTheDocument();
    });
  });
});
