import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
  refreshUser,
} from './authOps';

const initialState = {
  user: {
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.fulfilled, state => {
        state.user = {
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.user = {
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export default persistReducer(
  persistConfig,
  authSlice.reducer
);

