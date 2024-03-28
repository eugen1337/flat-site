import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authReducer";

export default configureStore({
    reducer: {
        auth: authReducer,
    },
});
