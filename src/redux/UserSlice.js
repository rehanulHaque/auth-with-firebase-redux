import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/config";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUserData: (state, action) => {
            state.user = null;
        }
    },
});

export const { setUser, clearUserData } = userSlice.actions;
export default userSlice.reducer;