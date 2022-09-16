/**
 * 
 * @param param0 {locale: string, currency: string, price: number}
 * @returns {string} formatted price in string 
 */
export const formatPrice = ({locale='de-DE', currency='EUR', price}: {locale?: string, currency?: string, price: number}): string => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(price);
}