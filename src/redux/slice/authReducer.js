import { createSlice } from "@reduxjs/toolkit";

const initialState = { login: "", password: "" };

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setLogin(state, action) {
            state.login = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
    },
});

export const { setLogin, setPassword } = authSlice.actions;
export default authSlice.reducer;
