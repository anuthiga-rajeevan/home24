import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('Footer should always has "Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten." text', () => {
    render(<Footer/>);
    const footerText = screen.getByText('Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.');
    expect(footerText).toBeInTheDocument();
  });
});