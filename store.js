// store.js
import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './Slice/boardSlice';
import ItemSlice from './Slice/ItemSlice';
import columnSlice from './Slice/ColumnSlice';

const store = configureStore({
  reducer: {
   board : boardSlice,
   column: columnSlice,
   item: ItemSlice,
  },
});

export default store;