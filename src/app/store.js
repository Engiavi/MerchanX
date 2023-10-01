import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import ProductSlice  from '../features/Product/ProductListSlice';
export const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});
