import { createSlice } from '@reduxjs/toolkit';

const initialStateEdit = {
  value: false,
};

export const editNameSlice = createSlice({
  name: 'editNameSlice',
  initialState: initialStateEdit,
  reducers: {
    edit: (state) => {
      state.value = true;
    },

    cancelEdit: (state) => {
      state.value = false;
    },
  },
});

export const { edit, cancelEdit } = editNameSlice.actions;
export default editNameSlice.reducer;
