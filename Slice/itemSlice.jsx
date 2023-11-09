const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  item: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem(state, action) {
      state.item.push(action.payload);
    },
    deleteItem(state, action) {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
