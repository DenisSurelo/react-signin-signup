import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  apiClient,
  setToken,
  unsetToken,
} from './apiClient';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiClient.post(
        '/users/signup',
        credentials
      );

      setToken(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Registration failed'
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiClient.post(
        '/users/login',
        credentials
      );

      setToken(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Login failed'
      );
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await apiClient.post('/users/logout');
      unsetToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Logout failed'
      );
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token');
    }

    try {
      setToken(token);

      const { data } = await apiClient.get('/users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Unable to refresh user'
      );
    }
  }
);