import React from 'react';
import { Paper } from '@mui/material';
import { Article } from '../../types/types';
import { formatPrice } from '../../utils/utils';

const ProductCard = ({ article }: { article: Article }) => {
    console.log(article.prices)
    return (
        <Paper sx={{ width: '30%', p: 2, mr:2, mb:2 }} elevation={3} square>
            <img src={article.images[0]?.path} alt={article.name}/>
            <p>{article.name}</p>
            <p>{article.variantName}</p>
            <p>{formatPrice({price: article.prices.regular.value, currency: article.prices.currency})}</p>
  
        </Paper>
    );
};

export default ProductCard;