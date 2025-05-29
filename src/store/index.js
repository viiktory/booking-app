import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import hotelsReducer from './slices/hotelsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    hotels: hotelsReducer,
  },
});
