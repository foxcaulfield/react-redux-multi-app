import React from 'react';
import { Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import classNames from './App.module.css';
import Dialog from './components/dialogs/Dialog';
import Dialogs from './components/dialogs/Dialogs';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Invoice from './components/invoices/Invoice';
import Invoices from './components/invoices/Invoices';
import Messages from './components/messages/Messages';
import Profile from './components/profile/Profile';
import Sidebar from './components/Sidebar';
import { Counter } from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';

function App({ state, addPost, updatePostTextarea }) {
  return (
    // <div className="App">
    <div className={classNames.App}>
      <div className={classNames.header}>
        <Header />
        <NavLink
          style={({ isActive }) => {
            return {
              // display: "block",
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
          to="/invoices"
        >
          Invoices
        </NavLink>{' '}
        |{' '}
        <NavLink
          style={({ isActive }) => {
            return {
              // display: "block",
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
          to="/expenses"
        >
          Expenses
        </NavLink>
      </div>
      <div className={classNames.sidebar}>
        <Sidebar />
      </div>
      <div className={classNames.content}>
        <Routes>
          {/* <Route
            path="profile"
            element={<Profile profilePageState={state.profilePage} addPost={addPost} updatePostTextarea={updatePostTextarea} />}
          /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="dialogs" element={<Dialogs />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select a dialog</p>
                </main>
              }
            />
            <Route path=":dialogId" element={<Dialog />} />
          </Route>

          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          {/* <Route path="*" element={<Navigate to ="/" />}/> */}
          <Route path="/messages" element={<Messages />} />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/posts"
            element={
              <>
                {/* <em>Post of the day</em>
                <hr />
                <Outlet />
                <hr /> */}
                <AddPostForm />
                <PostsList />
              </>
            }
          >
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select a post</p>
                </main>
              }
            />
          {/* <Route path=":postId" element={<EditPostForm />} /> */}
          </Route>
            <Route path="/readPost/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>

        <Outlet />
      </div>

      {/* <Counter /> */}
    </div>
  );
}

export default App;
