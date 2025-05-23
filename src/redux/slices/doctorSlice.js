import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api, { GetGateway } from "../apiGateways/apiHandler";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getdoctor = createAsyncThunk('doctor/getdoctor', async ({ token, centerId }, { rejectWithValue }) => {
    try {
        console.log({ token, centerId })
        const allDoctor = await api.get(`${BASE_URL}/api/get-drlist/${centerId}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return allDoctor.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})


export const getAllCenters = createAsyncThunk('center/getAllcenter',async(token,thunkApi)=>{
    try {
        const Allcenters = await api.get(`${BASE_URL}/api/centerlist`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return Allcenters.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message)
    }
})

const doctorSlice = createSlice({
    name: "doctor",
    initialState: {
        loading: false,
        error: null,
        allDoctor: [],
        allCenters:[]
    },
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getdoctor.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getdoctor.fulfilled, (state, action) => {
            state.loading = false;
            state.allDoctor = action.payload.doctors;
        })
        .addCase(getdoctor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getAllCenters.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getAllCenters.fulfilled,(state,action)=>{
            state.loading=false;
            state.allCenters=action.payload.centerList;
        })
        .addCase(getAllCenters.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
    }

});

export const { logout } = doctorSlice.actions;
export default doctorSlice.reducer;