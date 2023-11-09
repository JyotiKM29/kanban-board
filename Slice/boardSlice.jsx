const { createSlice } = require("@reduxjs/toolkit");

const initialState ={
    board :[],
}

const boardSlice = createSlice(
   { name : 'board',
    initialState,
    reducers:{
        addBoard(state, action){
           state.board.push(action.payload);
        
        },

        updateBoard(state, action){
            
        },

        deleteBoard(state, action){
            state.board = state.board.filter((item) => item.id !== action.payload);
        }

    }
}

)

export const {addBoard, updateBoard , deleteBoard} = boardSlice.actions;

 export default boardSlice.reducer;