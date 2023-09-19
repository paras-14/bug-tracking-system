import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// export const getAllProjectsOrgLeader = createAsyncThunk("getAllProjectsOrgLeader",async(args,{rejectWithValue})=>{
//     // console.log("hello")
//         const response=await fetch('http://localhost:2000/getAllprojects/orgLeader')
//         try {
//             const result=await response.json();
//             console.log("AllProjectsOrgeLeaderdubara->",result.data);
//             return result.data;
//         } catch (error) {
//             return rejectWithValue(error)
//         }
// })


const initialState = {
    show3 : false,
    show4 : false,
    // CurrentBugMembers:[],
    newBugname:"",
    newprojectname:"",
    // projects:[],
    // CurrentMembers:[],
    // show2:false,
}



const bugModalSlice = createSlice({
    name : "bugModalSlice",
    initialState,
    reducers : {
        
        openAddMembersToBugModal : (state) => {
            // console.log("barbie")
            state.show3= true;
        },

        closeAddMembersToBugModal : (state) => {
            // console.log("openheimmer")
            state.show3 = false;
        }, 

        openBugModal : (state) => {
            console.log("barbie")
            state.show4= true;
        },
        closeBugModal : (state) => {
            // console.log("openheimmer")
            state.show4 = false;
        }, 
        getSingleBugID: (state, action) => {
            console.log("Kemchooo",action.payload)
            state.newBugname = action.payload; // Set the payload value to state.id
            
        },
        getSingleProjectID: (state, action) => {
            console.log("Kemchooo majama",action.payload)
            state.newprojectname = action.payload; // Set the payload value to state.id
            
        },

      
       
        

    }
})

export const {closeAddMembersToBugModal,openAddMembersToBugModal,openBugModal,closeBugModal,getSingleBugID,getSingleProjectID} = bugModalSlice.actions

export default bugModalSlice.reducer