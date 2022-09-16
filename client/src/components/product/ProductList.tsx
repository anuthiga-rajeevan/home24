import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Category } from '../../types/types';
import ProductCard from './ProductCard';

const ProductList = ({ products }: { products: { categories: Category[] } }) => {
    const { categories } = products;
    const { articleCount, name, categoryArticles: { articles } = { articles: [] } } = categories[0] || {};

    return (
        <Paper sx={{ width: '80%', mt: 2, ml: 2 }} elevation={0} square>
            <Typography
                variant='h6'
                noWrap
                sx={{
                    fontWeight: 200,
                    color: 'blue',
                    lineHeight: '3rem',
                    display: 'inline'
                }}
            >
                {name}<Typography
                    variant='body1'
                    noWrap
                    sx={{
                        fontWeight: 200,
                        color: '#1976d2',
                        lineHeight: '3rem',
                        display: 'inline'
                    }}
                > ({articleCount})</Typography>
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {articles.map((article, key) => <ProductCard key={key} article={article} />)}
            </Box>
        </Paper>
    );
};

export default ProductList;