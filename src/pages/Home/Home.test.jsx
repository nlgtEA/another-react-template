import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home from './index';

describe('Home', () => {
  it('renders correctly', () => {
    render(<Home />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
