import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const imageSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const image = action.payload;
      const existingImage = state.cartItems.find(
        (item) => item.id === image.id
      );
      if (!existingImage) {
        state.cartItems.push(image);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Item added to cart!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "Item already added to cart!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
});

export const { addToCart, removeFromCart } = imageSlice.actions;

export const cartReducer = imageSlice.reducer;
