import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../services/axios';

// ✅ Helper function to safely access localStorage
const safeLocalStorage = {
  getItem: (key) =>
    typeof window !== 'undefined' ? localStorage.getItem(key) : null,
  setItem: (key, value) => {
    if (typeof window !== 'undefined') localStorage.setItem(key, value);
  },
  removeItem: (key) => {
    if (typeof window !== 'undefined') localStorage.removeItem(key);
  },
};

// 🔹 Async action to handle login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/tokens', { email, password });
      return response.data; // Should contain token and user info
    } catch (err) {
      return rejectWithValue(err.response?.data?.errors?.[0] || 'Login failed');
    }
  }
);

// 🔹 Load saved data safely
const savedToken = safeLocalStorage.getItem('token');
const savedUser = JSON.parse(safeLocalStorage.getItem('user') || 'null');

const initialState = {
  token: savedToken,
  user: savedUser,
  loading: false,
  error: null,
  isLoggedIn: !!savedToken,
};

// 🔹 Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;

      // Clear localStorage safely
      safeLocalStorage.removeItem('token');
      safeLocalStorage.removeItem('user');
    },
    updateUserData(state, action) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        safeLocalStorage.setItem('user', JSON.stringify(state.user));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;

        // Save token and user info safely
        safeLocalStorage.setItem('token', action.payload.token);
        safeLocalStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
      });
  },
});

export const { logout, updateUserData } = authSlice.actions;
export default authSlice.reducer;
