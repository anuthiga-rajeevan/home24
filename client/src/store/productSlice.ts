import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts as getProductsService } from './../services/product.services';
import { Category, LoadingStatus } from './../types/types';
import { setAlert } from './alertSlice';

// Types
interface ProductState {
  products: {categories: Category[] | []};
  getProductStatus: LoadingStatus;
}

const initialState: ProductState = {
  products: {categories: []},
  getProductStatus: LoadingStatus.idle,
};

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_: void, { dispatch, rejectWithValue }) => {
    try {
      const getProductsResponse = await getProductsService();
      dispatch(setAlert({ msg: 'Products retrieved Successfully', type: 'success' }));
      return getProductsResponse;
    } catch (err: any) {
      const error = err.response?.data?.error || 'Something went wrong';
      dispatch(setAlert({ msg: error, type: 'error' }));

      return rejectWithValue(error);
    }
  },
);

// Slice
const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.getProductStatus = LoadingStatus.success;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.getProductStatus = LoadingStatus.failed;
        state.products = {categories: []};
      })
      .addCase(getProducts.pending, (state) => {
        state.getProductStatus = LoadingStatus.loading;
        state.products = {categories: []};
      });
  },
});

export default productSlice.reducer;
