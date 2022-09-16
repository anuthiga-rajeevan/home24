import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import alertReducer from './alertSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    alert: alertReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;