import { createSlice, nanoid } from '@reduxjs/toolkit';

let initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
          meta: 'i am a meta string',
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      let existingPost = state.posts.find((post) => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export const selectPostsList = (state) => state.posts.posts;
export const selectPostById = (id) => (state) =>
  state.posts.posts.find((post) => post.id === id);
// export const selectPostById = (state, postId) => state.posts.posts.find((post) => post.id === postId);

export default postsSlice.reducer;
