import { createSlice } from '@reduxjs/toolkit';

let initialState = [
  { id: '1', title: 'First!', content: 'Hello' },
  { id: '2', title: 'Second!', content: 'Hi' },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // postAdded(state, action) {
    //   state.push(action.payload);
    // },
    postAdded: {
      
    }(state, action) {
      state.push(action.payload);
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      let existingPost = state.find((post) => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export const selectPostsList = (state) => state.posts;
export const selectPostById = (id) => (state) =>
  state.posts.find((post) => post.id === id);

export default postsSlice.reducer;
