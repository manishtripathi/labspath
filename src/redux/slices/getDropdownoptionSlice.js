import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api, { GetGateway } from "../apiGateways/apiHandler";
import { GenerateOption } from "../../Component/commonService";
const BASE_URL = import.meta.env.VITE_BASE_URL;


export const getAlltest = createAsyncThunk('dropdownoption/getalltest', async (_, { rejectWithValue }) => {
    try {
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




export const getdoctor = createAsyncThunk('doctor/getdoctor', async (_, { rejectWithValue }) => {
    try {
        const allDoctor = await api.get(`get-drlist`)
        return allDoctor.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})


export const getAllCenters = createAsyncThunk('center/getAllcenter',async(_,thunkApi)=>{
    try {
        const Allcenters = await api.get(`centerlist`)
        return Allcenters.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message)
    }
})

export const getAllAdmins = createAsyncThunk('center/getAllAdmins',async(_,thunkApi)=>{
    try {
        const Allcenters = await api.get(`adminlist`)
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
        allTestCategory:[],
        allAdmins:[],
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
            state.allDoctor = GenerateOption(action.payload.doctors);
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
            state.allCenters=GenerateOption(action.payload.centerList);
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
            state.alltest=GenerateOption(action.payload.tests?.[0]?.test);
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
            state.allTestCategory=GenerateOption(action.payload.tests?.[0]?.testCategories);
        })
        .addCase(getAlltestCategorylst.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
        .addCase(getAllAdmins.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getAllAdmins.fulfilled,(state,action)=>{
            state.loading=false;
            state.allAdmins=GenerateOption(action.payload.admins);
        })
        .addCase(getAllAdmins.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error;
        })
    }

});

export const { logout } = getdropdownSlice.actions;
export default getdropdownSlice.reducer;