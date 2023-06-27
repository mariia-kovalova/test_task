import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './thunks';

const initialState = {
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
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      }),
});
export const usersReducer = slice.reducer;
