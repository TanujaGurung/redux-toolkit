import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },  
});

export const {addData } = dataSlice.actions;

export const selectData = (state) => state.data.data;

export default dataSlice.reducer;
