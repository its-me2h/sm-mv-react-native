import { createSlice } from "@reduxjs/toolkit";

export const nav = createSlice({
    name: "nav",
    initialState: {
        num: 0,
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
