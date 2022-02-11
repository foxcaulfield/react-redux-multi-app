import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: [
    { text: "l search params match the brand? ", likesCount: 13, id: "dsdsfe" },
    { text: "pretty simple: add the loca", likesCount: 61, id: "dsdsfe2" },
    { text: "eez, seems like this should b", likesCount: 235, id: "dsdsfe4" },
    { text: " that information, the task ", likesCount: 11, id: "dsdsfe6" },
    { text: "Well, let's look at another example.", likesCount: 7, id: "dsdsfe3" },
  ],
  textAreaValue: "Hi there!",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addPost: (state, action) => {
      console.log("action", action);

      state.postsData.push({ text: state.textAreaValue, likesCount: 13, id: state.postsData.length + 10 });
      state.textAreaValue = "";
    },
    updatePostTextarea: (state, action) => {
      state.textAreaValue = action.payload;
    },
  },
});

export const { addPost, updatePostTextarea } = profileSlice.actions;

export let selectTextAreaValue = (state) => state.profile.textAreaValue;
export let selectPostsData = (state) => state.profile.postsData;

export default profileSlice.reducer;
