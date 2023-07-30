import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSLices"
import projectReducer from "./slices/projectSlice"
import bugReducer from "./slices/bugSlice"
import projectModal from "./slices/projectModals"

const store = configureStore({
    reducer:{
        users:userReducer,
        projects:projectReducer,
        bugs:bugReducer,
        projectModal:projectModal
    }
})

export default store