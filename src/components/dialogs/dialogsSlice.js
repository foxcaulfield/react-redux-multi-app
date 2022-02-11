import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [
    {
      "username": "User 1",
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "messages": [
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      ],
    },
    {
      "username": "Houser 2",
      "id": 2,
      "title": "qui est esse",
      "messages": [
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      ],
    },
    {
      "username": "Easer 3",
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "messages": [
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      ],
    },
  ],
};

export const dialogsSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    add: (state, action) => {
      state.usersData.push({
        "username": "User 1231",
        "id": 352,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "messages": [
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        ],
      });
    },
  },
});

export const { add } = dialogsSlice.actions;

export const selectUserDataLength = (state) => state.dialogs.usersData.length;
export const selectUserData = (state) => state.dialogs.usersData;
export const selectUser = (id) => (state) => state.dialogs.usersData.find((user) => user.id === id);
// console.log('data', data);

export default dialogsSlice.reducer;
//   export const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     // The `reducers` field lets us define reducers and generate associated actions
//     reducers: {
//       increment: (state) => {
//         // Redux Toolkit allows us to write "mutating" logic in reducers. It
//         // doesn't actually mutate the state because it uses the Immer library,
//         // which detects changes to a "draft state" and produces a brand new
//         // immutable state based off those changes
//         state.value += 1;
//       },
//       decrement: (state) => {
//         state.value -= 1;
//       },
//       // Use the PayloadAction type to declare the contents of `action.payload`
//       incrementByAmount: (state, action) => {
//         state.value += action.payload;
//       },
//     },
//     // The `extraReducers` field lets the slice handle actions defined elsewhere,
//     // including actions generated by createAsyncThunk or in other slices.
//     extraReducers: (builder) => {
//       builder
//         .addCase(incrementAsync.pending, (state) => {
//           state.status = 'loading';
//         })
//         .addCase(incrementAsync.fulfilled, (state, action) => {
//           state.status = 'idle';
//           state.value += action.payload;
//         });
//     },
//   });
