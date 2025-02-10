import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api, { GetGateway } from "../apiGateways/apiHandler";
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const getAlltest = createAsyncThunk('dropdownoption/getalltest', async ({ token }, { rejectWithValue }) => {
    try {
        console.log({ token, centerId })
        const allTest = await api.get(`tests`)
        return allTest.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

export const getAlltestCategorylst = createAsyncThunk('dropdownoption/getalltestcategory', async (_, { rejectWithValue }) => {
    
    try {
        const allTestcategory = await api.get(`categories`)
        return allTestcategory.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})




export const getdoctor = createAsyncThunk('doctor/getdoctor', async ({ token, centerId }, { rejectWithValue }) => {
    try {
        console.log({ token, centerId })
        const allDoctor = await api.get(`get-drlist`)
        return allDoctor.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})


export const getAllCenters = createAsyncThunk('center/getAllcenter',async(token,thunkApi)=>{
    try {
        const Allcenters = await api.get(`centerlist`)
        return Allcenters.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message)
    }
})


const getdropdownSlice = createSlice({
    name: "dropdownoption",
    initialState: {
        loading: false,
        error: null,
        allDoctor: [],
        allCenters:[],
        alltest:[],
        allTestCategory:[]
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
        .addCase(getAlltest.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getAlltest.fulfilled,(state,action)=>{
            state.loading=false;
            state.alltest=action.payload.tests;
        })
        .addCase(getAlltest.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addCase(getAlltestCategorylst.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getAlltestCategorylst.fulfilled,(state,action)=>{
            state.loading=false;
            state.allTestCategory=action.payload.tests;
        })
        .addCase(getAlltestCategorylst.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
    }

});

export const { logout } = getdropdownSlice.actions;
export default getdropdownSlice.reducer;