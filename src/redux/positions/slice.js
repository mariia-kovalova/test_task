import { createSlice } from '@reduxjs/toolkit';
import { getPositions } from './thunks';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'positions',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getPositions.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPositions.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getPositions.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      }),
});
export const positionsReducer = slice.reducer;
