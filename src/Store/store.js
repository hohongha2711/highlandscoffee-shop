// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './navigationSlide.js';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default store;