import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import AppRoutes from './AppRoutes';

const setup = () => {
  const user = userEvent.setup();
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createMemoryRouter(AppRoutes)} />
    </QueryClientProvider>,
  );

  return {
    user,
  };
};

// JSDom might print out an error if you try to use the <Link> component in testing
// It's fine to ignore it
// See more:
// https://github.com/remix-run/react-router/issues/9951
// https://github.com/jsdom/jsdom/issues/2112
describe('App', () => {
  it('renders correctly', () => {
    setup();
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about',
    );

    expect(screen.getByRole('heading', { name: 'Home' })).toBe;
  });

  describe('User clicks on about link', () => {
    it('renders about page', async () => {
      const { user } = setup();

      user.click(screen.getByRole('link', { name: 'About' }));
      expect(await screen.findByRole('heading', 'About')).toBeInTheDocument();
    });
  });
});
