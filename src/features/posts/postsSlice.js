import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

let initialState = [
  {
    id: '1',
    title: 'First!',
    content: 'Hello',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second!',
    content: 'Hi',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // postAdded(state, action) {
    //   state.push(action.payload);
    // },
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
          meta: 'i am a meta string',
        };
      },
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
