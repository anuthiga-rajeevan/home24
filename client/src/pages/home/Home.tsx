import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../../components/product/CategoryList';
import ProductList from '../../components/product/ProductList';
import Spinner from '../../components/spinner/Spinner';
import { AppDispatch, RootState } from '../../store';
import { getProducts } from '../../store/productSlice';
import { Category, LoadingStatus } from '../../types/types';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const getProductStatus: LoadingStatus = useSelector((state: RootState) => state.product.getProductStatus);
    const products: { categories: Category[] } = useSelector((state: RootState) => state.product.products);

    useEffect(() => {
        if (getProductStatus === LoadingStatus.idle) {
            dispatch(getProducts());
        }
    }, [getProductStatus, dispatch]);

    if (getProductStatus === LoadingStatus.loading) {
        return (<Spinner loadingStatus={getProductStatus} />);
    }

    if (getProductStatus === LoadingStatus.failed) {
        return (
            <Typography
                variant='body1'
                noWrap
                sx={{
                    m: 5,
                    lineHeight: '5rem',
                    fontSize: 20,
                    color: 'red',
                }}
            >
                Failed to load products. Please try again
            </Typography>
        );
    }

    return (
        <Box sx={{ width: '100%', display: 'flex' }}>
            <CategoryList products={products} />
            <ProductList products={products} />
        </Box>
    );
};

export default Home;