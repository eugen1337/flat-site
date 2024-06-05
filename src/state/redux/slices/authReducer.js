import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    login: "",
    password: "",
    token: "",
    isLogged: false,
    status: "",
};

const getToken = createAsyncThunk(
    "authSlice/getToken",
    async (option, thunkAPI) => {
        const user = {
            login: thunkAPI.getState().auth.login,
            password: thunkAPI.getState().auth.password,
        };
        const result = await (  
            await import("../../../transport/api.js")
        )[option](user);

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
        resetUserInfo(state) {
            state.login = "";
            state.password = "";
            state.token = "";
            state.isLogged = false;
            state.status = "";
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

export const { setLogin, setPassword, resetUserInfo } = authSlice.actions;
export default authSlice.reducer;
