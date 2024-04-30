import { createSlice } from "@reduxjs/toolkit";
import { send } from "../../../transport/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    id: 1,
    plan: {},
    status: "",
    room: {},
};

const sendPlan = createAsyncThunk(
    "planSlice/sendPlan",
    async (empty, thunkAPI) => {
        const data = thunkAPI.getState().plan.room;

        const result = await send({
            token: thunkAPI.getState().auth.token,
            data: data,
        });

        const jsonRes = JSON.parse(result);

        if (jsonRes.status === "OK") {
            return jsonRes.data;
        }
        return thunkAPI.rejectWithValue(jsonRes.status);
    }
);

const planSlice = createSlice({
    name: "planSlice",
    initialState,
    reducers: {
        incrementId(state) {
            state.id = state.id + 1;
        },
        setRoom(state, action) {
            state.room = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(sendPlan.fulfilled, (state, action) => {
                state.status = action.payload;
            })
            .addCase(sendPlan.rejected, (state, action) => {
                state.status = action.payload;
            });
    },
});
export { sendPlan };
export const { incrementId, setRoom } = planSlice.actions;
export default planSlice.reducer;
