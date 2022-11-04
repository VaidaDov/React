import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    changeSidebarVisiblity: (state, action) => {
      const isSidebarOpen = action.payload;
      state.isSidebarOpen = isSidebarOpen;
    },
  },
});

export const { changeSidebarVisiblity } = sidebarSlice.actions;
export default sidebarSlice.reducer;
