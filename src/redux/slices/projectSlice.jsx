import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


//CreateProject
export const createProject = createAsyncThunk("createProject",async(data,rejectWithValue)=>{
    try {
        console.log("second->",data);
        const response=await fetch('http://localhost:2000/create/project',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
        })
        const result=await response.json();
        console.log("postProject->",result.data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response)
    }

})


//GetAllProjectsOrgLeader
export const getAllProjectsOrgLeader = createAsyncThunk("getAllProjectsOrgLeader",async(args,{rejectWithValue})=>{
    // console.log("hello")
        const response=await fetch('http://localhost:2000/getAllprojects/orgLeader')
        try {
            const result=await response.json();
            console.log("AllProjectsOrgeLeader->",result.data);
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
})


//GetAllProjectsProjectManager
export const getAllProjectsManager = createAsyncThunk("getAllProjectsOrgLeader",async(args,{rejectWithValue})=>{
    const token = localStorage.getItem('token');
    // console.log("hello")
    if(token){
        const response=await fetch('http://localhost:2000/getAllprojects/projLeader',{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        })
        try {
            const result=await response.json();
            console.log("AllProjectsManager->",result.data);
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
})


//GetAllProjectsTesterNdeveloper
export const getAllProjectsTesterNdeveloper = createAsyncThunk("getAllProjectsOrgLeader",async(args,{rejectWithValue})=>{
    const token = localStorage.getItem('token');
    // console.log("hello")
    if(token){
        const response=await fetch('http://localhost:2000/getAllproject/testerNdeveloper',{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        })
        try {
            const result=await response.json();
            console.log("AllProjectsTesterNdeveloper->",result.data);
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
})

export const deleteProject = createAsyncThunk("deleteProject",async(data,rejectWithValue)=>{
    console.log("projectData->",data)

    try {
        const response = await fetch(`http://localhost:2000/delete/project`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data)
                // `${console.log("userbody ",body)}`
        })
        // console.log("deleteProjectResponse-> ",response)
        const result = await response.json();
        console.log("afterDeleteProject->",result);
        // nav("/")
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response)
    }
    
})

//getSingleProject
export const getSingleProject = createAsyncThunk("getSingleProject",async(data,{rejectWithValue})=>{
    console.log("whaData",data);
    // console.log("bkl->",projects);
})


const initialState={
    projects:[],
    loading:false,
    error:null,
    SingleProject:{},
}


const projectDetail=createSlice({
    name:"projectDetail",
    initialState,
    extraReducers:{
        [createProject.pending]:(state)=>{
            state.loading=true;
        },
        [createProject.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("shit is this what ",action.payload)
            state.projects.push(action.payload);
        },
        [createProject.rejected]:(state,action)=>{
            state.loading=false;
            state.projects=action.payload;
        },



        [getAllProjectsOrgLeader.pending]:(state)=>{
            state.loading=true;
        },
        [getAllProjectsOrgLeader.fulfilled]:(state,action)=>{
            state.loading=false;
            // console.log("Hhaihaihaiha",action.payload)
            state.projects=action.payload;
        },
        [getAllProjectsOrgLeader.rejected]:(state,action)=>{
            state.loading=false;
            state.projects=action.payload;
        },



        [getAllProjectsManager.pending]:(state)=>{
            state.loading=true;
        },
        [getAllProjectsManager.fulfilled]:(state,action)=>{
            state.loading=false;
            // console.log("Hhaihaihaiha",action.payload)
            state.projects=action.payload;
        },
        [getAllProjectsManager.rejected]:(state,action)=>{
            state.loading=false;
            state.projects=action.payload;
        },



        [getAllProjectsTesterNdeveloper.pending]:(state)=>{
            state.loading=true;
        },
        [getAllProjectsTesterNdeveloper.fulfilled]:(state,action)=>{
            state.loading=false;
            // console.log("Hhaihaihaiha",action.payload)
            state.projects=action.payload;
        },
        [getAllProjectsTesterNdeveloper.rejected]:(state,action)=>{
            state.loading=false;
            state.projects=action.payload;
        },


        [deleteProject.pending]:(state)=>{
            // console.log("chup Mc ?");
            state.loading=true;
        },
        [deleteProject.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("Deleted Projects-> ",action.payload)
            state.projects=action.payload;
        },
        [deleteProject.rejected]:(state,action)=>{
            state.loading=false;
            state.projects=action.payload;
        },



        [getSingleProject.pending]:(state)=>{
            state.loading=true;
        },
        [getSingleProject.fulfilled]:(state,action)=>{
            state.loading=false;
            // console.log("Hhaihaihaiha",action.payload)
            state.SingleProject=action.payload;
        },
        [getSingleProject.rejected]:(state,action)=>{
            state.loading=false;
            state.SingleProject=action.payload;
            console.log("whieeee ??",action.payload)
        },
    }
})

export default projectDetail.reducer