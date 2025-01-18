import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: { active: "Lab Center" },
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload; // Update the state
        },
    },
});

export const { setActive } = toggleSlice.actions;
export default toggleSlice.reducer; // Ensure singular "reducer" here
