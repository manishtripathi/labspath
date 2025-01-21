import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalIncome: 4562,
    totalCollectionCharges: 0,
    expenses: 0,
    totalCases: 1236,
    revenue: [2000, 1500, 3000, 4000],
    visitorList: [
        {
            id:5002,
            name: 'John',
            reffredBy: 'Dr. Self',
            total: 200,
            paid: 200,
            discount: 0,
            visitingDate: '2nd Jun 2023',
            status: 'Pending'
        }
    ];
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
})

export const selectDashboardData = (state)=> state.dashboard;
export default dashboardSlice.reducer;