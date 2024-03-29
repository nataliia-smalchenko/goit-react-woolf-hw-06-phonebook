import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    // addContact: (state, action) => {
    //   state.contacts = [...state.contacts, action.payload];
    // },
  },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;
