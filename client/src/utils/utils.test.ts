import { formatPrice } from './utils';

describe('formatPrice', () => {
  it('should format the price according to given locale and currency', () => {
    const formattedPrice = formatPrice({ locale: 'en-IN', currency: 'JPY', price: 123456.789 });
    expect(formattedPrice).toBe('JP¥1,23,457');
  });
  it('should format the price to German locale and EURO currency if lacale and currency not given', () => {
    const formattedPrice = formatPrice({ price: 123456.789 });
    expect(formattedPrice).toBe('123.456,79 €');
  });
});
