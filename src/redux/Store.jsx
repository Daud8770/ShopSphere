import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlice";
import WishlistReducer from "./Slices/WishlistSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    wishlist: WishlistReducer,
  },
});