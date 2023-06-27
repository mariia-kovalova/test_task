import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api/testApi';

export const getUsers = createAsyncThunk(
  'getUsers',
  async (params, { rejectWithValue }) => {
    try {
      return await API.users.getAll(params);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
