import { Box } from '@mui/material';
import React from 'react';
import CategoryList from '../../components/product/CategoryList';
import ProductList from '../../components/product/ProductList';

const Home = () => {

    return <Box><CategoryList/><ProductList/></Box>;
};

export default Home;