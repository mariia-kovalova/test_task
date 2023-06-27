import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api/testApi';

export const createUser = createAsyncThunk(
  'createUser',
  async (data, { rejectWithValue }) => {
    try {
      return await API.users.create(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getToken = createAsyncThunk(
  'getToken',
  async (_, { rejectWithValue }) => {
    try {
      return await API.token.get();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userActions = [createUser, getToken];
