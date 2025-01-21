import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import menuReducer from "./menuSlice"

const store = configureStore({
    reducer: {
        toggle: toggleReducer, 
        menu: menuReducer,
    },
});

export default store;
