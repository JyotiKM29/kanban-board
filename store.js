// store.js
import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './Slice/boardSlice';
import ItemSlice from './Slice/ItemSlice';

const store = configureStore({
  reducer: {
   board : boardSlice,
   item: ItemSlice,
  },
});

export default store;