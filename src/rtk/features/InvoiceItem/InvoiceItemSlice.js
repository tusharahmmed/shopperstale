import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   item: "Esse ut consequat Q",
  //   description: "Nemo voluptas rerum ",
  //   quantity: 224,
  //   price: 367,
  //   id: 1,
  // },
  // {
  //   item: "Non rem atque eaque ",
  //   description: "Ut veniam veritatis",
  //   quantity: 181,
  //   price: 269,
  //   id: 2,
  // },
  // {
  //   item: "Necessitatibus provi",
  //   description: "Excepturi deleniti m",
  //   quantity: 922,
  //   price: 501,
  //   id: 3,
  // },
  // {
  //   item: "Est et totam anim te",
  //   description: "Rerum laborum expedi",
  //   quantity: 317,
  //   price: 429,
  //   id: 4,
  // },
];

export const InvoiceItemSlice = createSlice({
  name: "InvoiceItem",
  initialState,
  reducers: {
    // add one
    addItem: (state, action) => {
      // generate uniq id
      let id = "";
      id += Math.random().toString(36);

      action.payload.id = id;

      state.push(action.payload);
    },
    // delete one
    deleteItem: (state, action) => {
      let index = state.findIndex(
        (product) => product.id === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const { addItem, deleteItem } = InvoiceItemSlice.actions;
