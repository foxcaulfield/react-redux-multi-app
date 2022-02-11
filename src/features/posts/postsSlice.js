import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import { client } from '../../api/client';

let initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts');
  console.log('response.data', response.data);
  return response.data;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        console.log('action.error.message', action.error.message);
        state.error = action.error.message;
      });
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export const selectPostsList = (state) => state.posts.posts;
export const selectPostById = (id) => (state) =>
  state.posts.posts.find((post) => post.id === id);
// export const selectPostById = (state, postId) => state.posts.posts.find((post) => post.id === postId);
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;

export default postsSlice.reducer;
