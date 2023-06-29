import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './thunks';

const initialState = {
  total_users: {},
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.total_users = payload.total_users;
        state.items = [...state.items, ...payload.users];
        state.isLoading = false;
        state.error = null;
      }),
});
export const usersReducer = slice.reducer;
