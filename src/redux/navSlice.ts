import { createSlice } from "@reduxjs/toolkit";

export const nav = createSlice({
    name: "nav",
    initialState: {
        route: 'Home',
    },
    reducers: {
        navUpdate: function (state, action) {
            const updatedData = action.payload;
            return {
                ...state,
                ...updatedData,
            };
        },
    },
});

export const navReducer = nav.reducer;
export const { navUpdate } = nav.actions;
