import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../transport/api";

const initialState = {
    login: "",
    password: "",
    token: "",
    isLogged: false,
    status: "",
};

const getToken = createAsyncThunk(
    "authSlice/getToken",
    async (empty, thunkAPI) => {
        console.log(thunkAPI.getState())
        console.log(thunkAPI.getState().auth.login)
        const user = {
            login: thunkAPI.getState().auth.login,
            password: thunkAPI.getState().auth.password,
        };
        const result = await login(user);
        const jsonRes = JSON.parse(result);

        if (jsonRes.status === "OK") {
            return jsonRes.token;
        }
        return thunkAPI.rejectWithValue(jsonRes.status);
        
    }
);

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
    extraReducers: (builder) => {
        builder

            .addCase(getToken.fulfilled, (state, action) => {
                state.isLogged = true;
                state.token = action.payload;
                state.status = "OK";
            })
            .addCase(getToken.rejected, (state, action) => {
                state.isLogged = false;
                state.token = action.payload;
                state.status = "BAD";
            });
    },
});

export { getToken };

export const { setLogin, setPassword } = authSlice.actions;
export default authSlice.reducer;
