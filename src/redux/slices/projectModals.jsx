import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show : false,
    id:0,
}

const projectModalSlice = createSlice({
    name : "projectModal",
    initialState,
    reducers : {
        openSingleProjectModal : (state) => {
            console.log("barbie")
            state.show = true;
        },
        closeSingleProjectModal : (state) => {
            console.log("openheimmer")
            state.show = false;
        }, 
        getSingleProjectID: (state, action) => {
            // console.log("Kemchooo")
            state.id = action.payload; // Set the payload value to state.id
            
        },

    }
})

export const {openSingleProjectModal , closeSingleProjectModal,getSingleProjectID} = projectModalSlice.actions

export default projectModalSlice.reducer