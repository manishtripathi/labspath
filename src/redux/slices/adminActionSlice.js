import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../apiGateways/apiHandler"

export const getPatientById = createAsyncThunk('patient/getpatient', async (patientId, { rejectWithValue }) => {
    try {
        const patient = await api.get(`cases/${patientId}`)
        return patient.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})


const initialState ={
    PatientDetail:{
        data:{},
        loading:false,
        error:false,
    }
}

const adminActionSlice = createSlice({
    name: "adminAction",
    initialState,
    reducers: {
        resetPatientDetail: (state) => {
            state.PatientDetail.data = {}
            state.PatientDetail.loading = false
            state.PatientDetail.error = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPatientById.pending, (state) => {
            state.PatientDetail.loading = true
            state.PatientDetail.error = false
        })
        .addCase(getPatientById.fulfilled, (state, action) => {
            state.PatientDetail.loading = false
            state.PatientDetail.data = action.payload
        })
        .addCase(getPatientById.rejected, (state, action) => {
            state.PatientDetail.loading = false
            state.PatientDetail.error = action.payload
        })
    }
})

export const { resetPatientDetail } = adminActionSlice.actions
export default adminActionSlice.reducer
