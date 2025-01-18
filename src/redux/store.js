import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";

const store = configureStore({
    reducer: {
        toggle: toggleReducer, // Key must match `useSelector`
    },
});

export default store;
