import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filters.name;

/* export const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "filter/setFilterValue": {
      return {
        ...state,
        filterValue: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setFilterValue = (filterValue) => {
  return {
    type: "filter/setFilterValue",
    payload: filterValue,
  };
}; */
