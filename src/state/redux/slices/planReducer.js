import { createSlice } from "@reduxjs/toolkit";
import { send, getFlat, getFlatList } from "../../../transport/api.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  plan: {},
  status: "",
  rooms: [],
  flatList: []
};

const sendPlan = createAsyncThunk(
  "planSlice/sendPlan",
  async (empty, thunkAPI) => {
    const data = thunkAPI.getState().plan.plan;

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

const getFlatListThunk = createAsyncThunk(
  "planSlice/getFlatList",
  async (empty, thunkAPI) => {
    const result = await getFlatList({
      token: thunkAPI.getState().auth.token,
    });

    const jsonRes = JSON.parse(result);

    return jsonRes.ids;
  }
);

const getFlatThunk = createAsyncThunk(
  "planSlice/getFlat",
  async (id, thunkAPI) => {
    const result = await getFlat({
      token: thunkAPI.getState().auth.token,
      id,
    });
    const jsonRes = JSON.parse(result);

    return jsonRes.data;
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
      // state.rooms = [...state.rooms, action.payload];
    },
    setCoords(state, action) {},
    setPlan(state, action) {
      state.plan = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(sendPlan.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(sendPlan.rejected, (state, action) => {
        state.status = action.payload;
      })

      .addCase(getFlatListThunk.fulfilled, (state, action) => {
        state.flatList = action.payload;
      })

      .addCase(getFlatThunk.fulfilled, (state, action) => {
        state.status = action.payload;
      });
  },
});
export { sendPlan, getFlatThunk, getFlatListThunk };
export const { incrementId, setRoom, setPlan } = planSlice.actions;
export default planSlice.reducer;
