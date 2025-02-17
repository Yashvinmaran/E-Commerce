import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/wishlist";

export const fetchWishlist = createAsyncThunk("wishlist/fetch", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addToWishlist = createAsyncThunk("wishlist/add", async (product) => {
    await axios.post(API_URL, product);
    return product;
});

export const removeFromWishlist = createAsyncThunk("wishlist/remove", async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWishlist.fulfilled, (state, action) => action.payload)
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(removeFromWishlist.fulfilled, (state, action) => {
                return state.filter(item => item.id !== action.payload);
            });
    }
});

export default wishlistSlice.reducer;
