import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';

const store = configureStore({
    reducer: {
        mycart: cartReducer,
        wishlist: wishlistReducer,
    },
});

export default store;