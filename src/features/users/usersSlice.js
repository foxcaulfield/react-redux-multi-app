import { client } from '../../api/client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (first, seconn) => {
  console.log('seconn', seconn)
  console.log('first', first)
  const response = await client.get('fakeApi/users');
  return response.data;
});

const initialState = [
  // { id: '0', name: 'Tainaiti Jenrics' },
  // { id: '1', name: 'Kevun Grynd' },
  // { id: '2', name: 'Modisun Proice' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const {} = usersSlice.actions;

export const selectUsers = (state) => state.users;
export const selectUserById = (userId) => (state) =>
  state.users.find((user) => user.id === userId);

export default usersSlice.reducer;
