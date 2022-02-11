import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      I am a Sidebar
      <div>
        <NavLink
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
          to="/messages"
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
          to="/dialogs"
        >
          Dialogs
        </NavLink>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
          to="/something"
        >
          something
        </NavLink>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
          to="/counter"
        >
          counter
        </NavLink>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
          to="/posts"
        >
          posts
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
