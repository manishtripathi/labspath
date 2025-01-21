import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    activeMenu : null,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers :{
        toggleMenu: (state, action)=>{
            state.activeMenu = state.activeMenu === action.payload ? null: action.payload;
        },
    },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer