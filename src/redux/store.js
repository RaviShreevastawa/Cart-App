import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';
import authReducer from './slices/authSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    auth : authReducer
  },
});