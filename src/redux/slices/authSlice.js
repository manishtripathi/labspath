import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Thunks for asynchronous API calls

// Login as doctor
export const loginAsDoctor = createAsyncThunk("auth/loginAsDoctor", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/dr-login`, credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Login as admin
export const loginAsAdmin = createAsyncThunk("auth/loginAsAdmin", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/admin-login`, credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Login as lab center
export const loginAsLabCenter = createAsyncThunk("auth/loginAsLabCenter", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Create doctor
export const createDoctor = createAsyncThunk("auth/createDoctor", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/add-doctor`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Create admin
export const createAdmin = createAsyncThunk("auth/createAdmin", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/add-admin`, data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // Login as Doctor
    builder.addCase(loginAsDoctor.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginAsDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.doctor;
      state.token = action.payload.token;
    });
    builder.addCase(loginAsDoctor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Login as Admin
    builder.addCase(loginAsAdmin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginAsAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginAsAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Login as Lab Center
    builder.addCase(loginAsLabCenter.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginAsLabCenter.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginAsLabCenter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Create Doctor
    builder.addCase(createDoctor.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(createDoctor.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Create Admin
    builder.addCase(createAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(createAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
