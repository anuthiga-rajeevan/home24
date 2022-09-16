import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Header from './Header';

import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
    it('Header should always has "Home24" heading', () => {
        render(<Header />, { wrapper: Router });
        const { getByText } = within(screen.getAllByRole("heading", { level: 3 })[0]);
        expect(getByText('Home24')).toBeInTheDocument();
    });

    it('Header should always has search bar', async () => {
        render(<Header />, { wrapper: Router });
        const searchTextBox = screen.getByRole('textbox');
        expect(searchTextBox).toBeInTheDocument();
    });
});