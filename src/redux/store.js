// import { configureStore } from "@reduxjs/toolkit";
// import toggleReducer from "./toggleSlice";
// import menuReducer from "./menuSlice"

// const store = configureStore({
//     reducer: {
//         toggle: toggleReducer, 
//         menu: menuReducer,
//     },
// });

// export default store;


import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
// import {thunk} from "redux-thunk";

import authReducer from "./slices/authSlice";
import doctorReducer from "./slices/doctorSlice";
import getDropDownSlice from './slices/getDropdownoptionSlice'


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","dropdownOptions"], 
};

const rootReducer = combineReducers({
  auth: authReducer,
  doctor:doctorReducer,
  dropDownOptions: getDropDownSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);
export default store;
