import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show : false,
    newprojectname:"",
    CurrentMembers:[],
    show2:false,
}

const projectModalSlice = createSlice({
    name : "projectModal",
    initialState,
    reducers : {
        openSingleProjectModal : (state) => {
            // console.log("barbie")
            state.show = true;
        },
        closeSingleProjectModal : (state) => {
            // console.log("openheimmer")
            state.show = false;
        }, 
        openAddMembersModal : (state) => {
            // console.log("barbie")
            state.show2= true;
        },
        closeAddMembersModal : (state) => {
            // console.log("openheimmer")
            state.show2 = false;
        }, 
        getSingleProjectID: (state, action) => {
            console.log("Kemchooo",action.payload)
            state.newprojectname = action.payload; // Set the payload value to state.id
            
        },
        AddMembers:(state,action)=>{
            // console.log("Member aya->",action.payload);
             state.CurrentMembers.push(action.payload);
        },
        DeleteMembers:(state,action)=>{
            console.log("Not Again-> ",action.payload);
            state.CurrentMembers = state.CurrentMembers.filter(member => member.email !== action.payload.email);
            console.log("sorry",state.CurrentMembers);
        }

    }
})

export const {openSingleProjectModal , closeSingleProjectModal,openAddMembersModal , closeAddMembersModal,getSingleProjectID,AddMembers,DeleteMembers} = projectModalSlice.actions

export default projectModalSlice.reducer