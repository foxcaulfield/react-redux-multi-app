import { configureStore } from '@reduxjs/toolkit';
import dialogsReducer from '../components/dialogs/dialogsSlice';
import counterReducer from '../features/counter/counterSlice';
import invoicesReducer from '../components/invoices/invoicesSlice';
import messagesReducer from '../components/messages/messagesSlice';
import profileReducer from '../components/profile/profileSlice';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dialogs: dialogsReducer,
    invoices: invoicesReducer,
    messages: messagesReducer,
    profile: profileReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
