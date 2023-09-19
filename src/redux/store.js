import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices"
import projectReducer from "./slices/projectSlice"
import bugReducer from "./slices/bugSlice"
import projectModal from "./slices/projectModals"
import bugModal from "./slices/bugModal"

const store = configureStore({
    reducer:{
        users:userReducer,
        projects:projectReducer,
        bugs:bugReducer,
        projectModal:projectModal,
        bugModal:bugModal
    }
})

export default store