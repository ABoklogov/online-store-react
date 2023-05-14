import { configureStore } from '@reduxjs/toolkit';
import { catalogSlice } from './catalog/catalogSlice';
// import { basketSlice } from './basket/basketSlice';

export const store = configureStore({
  reducer: {
    [catalogSlice.name]: catalogSlice.reducer,
    // [basketSlice.name]: basketSlice.reducer,
  },
});