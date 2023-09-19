import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//CreateBug
export const createBug = createAsyncThunk("createBug", async (data, rejectWithValue) => {
    try {
        const token = localStorage.getItem('token');
        console.log("Bug Token Aya bhay ",token);
        if (token) {
            console.log("secondh->", data);
            const response = await fetch('http://localhost:2000/create/bugs', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            console.log("postBug->", result);
            return result.data;
        }
    } catch (error) {
        return rejectWithValue(error.response)
    }

})


//GetAllBug
export const getAllBugs = createAsyncThunk("getAllbugs", async (args, { rejectWithValue }) => {
    // console.log("hello")
    const response = await fetch('http://localhost:2000/getAll/bugs')
    try {
        const result = await response.json();
        console.log("AllBugs->", result.data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error)
    }

})


export const deleteBug= createAsyncThunk("deleteBug",async(data,rejectWithValue)=>{
    console.log("bugData->",data)

    try {
        const response = await fetch(`http://localhost:2000/delete/bug`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data)
                // `${console.log("userbody ",body)}`
        })
        // console.log("deleteProjectResponse-> ",response)
        const result = await response.json();
        console.log("afterDeleteBug->",result);
        // nav("/")
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response)
    }
    
})


export const updateBug = createAsyncThunk("updateBug",async(data,{rejectWithValue})=>{
    console.log("updateBug",data);
    // console.log("bkl->",projects);

    try {
        const response = await fetch(`http://localhost:2000/update/bug`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data)
                // `${console.log("userbody ",body)}`
        })
        // console.log("deleteProjectResponse-> ",response)
        const result = await response.json();
        console.log("afterUpdateBug->",result);
        // nav("/")
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response)
    }
})


const initialState = {
    bugs: [],
    loading: false,
    error: null,
}


const bugDetail = createSlice({
    name: "bugDetail",
    initialState,
    extraReducers: {
        [createBug.pending]: (state) => {
            state.loading = true;
        },
        [createBug.fulfilled]: (state, action) => {
            state.loading = false;
            console.log("shit is this what ", action.payload)
            state.bugs.push(action.payload);
        },
        [createBug.rejected]: (state, action) => {
            state.loading = false;
            state.bugs = action.payload;
        },



        [getAllBugs.pending]: (state) => {
            state.loading = true;
        },
        [getAllBugs.fulfilled]: (state, action) => {
            state.loading = false;
            // console.log("Hhaihaihaiha",action.payload)
            state.bugs = action.payload;
        },
        [getAllBugs.rejected]: (state, action) => {
            state.loading = false;
            state.projects = action.payload;
        },

        
        [deleteBug.pending]:(state)=>{
            // console.log("chup Mc ?");
            state.loading=true;
        },
        [deleteBug.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("Deleted Projects-> ",action.payload)
            state.bugs=action.payload;
        },
        [deleteBug.rejected]:(state,action)=>{
            state.loading=false;
            state.bugs=action.payload;
        },


        [updateBug.pending]:(state)=>{
            state.loading=true;
        },
        [updateBug.fulfilled]:(state,action)=>{
            state.loading=false;
            // console.log("Hhaihaihaiha",action.payload)
            state.bugs=action.payload;
        },
        [updateBug.rejected]:(state,action)=>{
            state.loading=false;
            state.bugs=action.payload;
            console.log("updateDone ??",action.payload)
        },
    }
})

export default bugDetail.reducer