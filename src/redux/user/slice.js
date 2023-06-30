import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createUser, getToken, userActions } from './thunks';

const getActions = type => userActions.map(action => action[type]);

const initialState = {
  token: '',
  user_id: '',
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getToken.fulfilled, (state, { payload }) => {
        state.token = payload.token;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.user_id = payload.user_id;
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.response;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      }),
});
export const userReducer = slice.reducer;
