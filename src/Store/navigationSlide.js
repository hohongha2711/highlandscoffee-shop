// src/features/navigation/navigationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: "",
  reducers: {
    setActiveLink: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActiveLink } = navigationSlice.actions;
export default navigationSlice.reducer;