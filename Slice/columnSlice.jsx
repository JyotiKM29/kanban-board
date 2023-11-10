const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  column: [],
};

const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    addColumn(state, action) {
      state.column.push(action.payload);
    },
    deleteColumn(state, action) {
      state.column = state.column.filter((column) => column.id !== action.payload);
    },
  },
});

export const { addColumn, deleteColumn } = columnSlice.actions;
export default columnSlice.reducer;