import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "../features/api/ApiSlice";


export const store = configureStore({
    reducer: {
        [ApiSlice?.reducerPath]: ApiSlice.reducer
    },
    middleware: (getDefaulMiddlewares) => getDefaulMiddlewares().concat(ApiSlice.middleware),
});