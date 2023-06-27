import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/slice';
import { positionsReducer } from './positions/slice';
import { userReducer } from './user/slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    positions: positionsReducer,
    user: userReducer,
  },
});
