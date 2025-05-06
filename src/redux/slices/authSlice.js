import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    registeredUser: [], // saved user info after registration
    currentUser: [],     // currently logged in user
    isAuthenticated: false,
  },
  reducers: {
    register: (state, action) => {
      state.registeredUser = action.payload;
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      if (
        state.registeredUser &&
        state.registeredUser.username === username &&
        state.registeredUser.password === password
      ) {
        state.currentUser = state.registeredUser;
        state.isAuthenticated = true;
      } else {
        alert('Invalid username or password');
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
