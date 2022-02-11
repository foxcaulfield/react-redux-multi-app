import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Tainaiti Jenrics' },
  { id: '1', name: 'Kevun Grynd' },
  { id: '2', name: 'Modisun Proice' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

// export const {} = usersSlice.actions;

export const selectUsers = (state) => state.users;
export const selectUserById = (userId) => (state) =>
  state.users.find((user) => user.id === userId);

export default usersSlice.reducer;
