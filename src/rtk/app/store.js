import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "../features/api/ApiSlice";
import { InvoiceItemSlice } from "../features/InvoiceItem/InvoiceItemSlice";

export const store = configureStore({
  reducer: {
    InvoiceItems: InvoiceItemSlice.reducer,
    [ApiSlice?.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaulMiddlewares) =>
    getDefaulMiddlewares().concat(ApiSlice.middleware),
});
