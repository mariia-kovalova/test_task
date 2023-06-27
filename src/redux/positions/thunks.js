import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api/testApi';

export const getPositions = createAsyncThunk(
  'getPositions',
  async (_, { rejectWithValue }) => {
    try {
      return await API.positions.getAll();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
