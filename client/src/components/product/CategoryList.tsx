import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';

import { Category } from '../../types/types';

const CategoryList = ({ products }: { products: { categories: Category[] } }) => {
    const { categories } = products;
    const { childrenCategories: {
        list
    } = { list: [] } } = categories[0] || {};


    return (
        <Paper sx={{ width: '20%', p: 2, borderRight: 1, borderColor: '#8d99ae' }} elevation={0} square>
            <Typography
                variant='h6'
                noWrap
                sx={{
                    fontWeight: 200,
                    color: 'blue',
                    lineHeight: '3rem',
                }}
            >
                Categories
            </Typography>
            {
                list.map(
                    ({ name, urlPath }, key) =>
                        <Box key={key} sx={{ textDecoration: 'none', fontSize: 16, pl: 2, mb: 2, borderBottom: 1, borderColor: '#8d99ae' }}>
                            <Link to={urlPath} style={{ textDecoration: 'none', color: '#1976d2' }}>{name}</Link>
                        </Box>
                )
            }
        </Paper>
    );
};

export default CategoryList;