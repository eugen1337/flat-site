import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";
import planReducer from "./slices/planReducer";

export default configureStore({
    reducer: {
        auth: authReducer,
        plan: planReducer
    },
});
