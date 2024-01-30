import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the "user" state
export const user = createSlice({
    name: "user",
    initialState: {
        id: 1,
        isPro: null,
        userName: null,
        firstName: null,
        lastName: null,
        avatarURL: null
    },
    reducers: {
        // Define the "userUpdate" reducer, which will update the "user" state with the payload data
        userUpdate: function (state, action) {
            const updatedData = action.payload;
            return {
                ...state,
                ...updatedData,
            };
        },
    },
});

// Export the user slice and its associated actions
export const userReducer = user.reducer;
export const { userUpdate } = user.actions;



// id: 3,
// isPro: false,
// userName: "itsme2h",
// firstName: "taoufik",
// lastName: "harmouche",
// avatarURL: "https://i.postimg.cc/y8fnSKKC/f-1.png"