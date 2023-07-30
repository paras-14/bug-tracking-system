import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'


//CreateUser
export const createUser = createAsyncThunk("createUser",async(data,rejectWithValue)=>{
    const response=await fetch('http://localhost:2000/create/user',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })

    try {
        const result=await response.json();
        console.log("postUser->",result.data);
        if(result.status=="ok"){
            toast.success('You Are Now An Organisation Leader', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }else{
            toast.error((result.msg || result.message), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
        return result.data;
    } catch (error) {
        toast.error((result.msg || result.message), {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        return rejectWithValue(error.response)
    }

})

//SignupUser
export const updateUser = createAsyncThunk("updateUser",async(data,rejectWithValue)=>{
    const response=await fetch('http://localhost:2000/signup/user',{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })

    try {
        const result=await response.json();
        console.log("updateUser->",result.data);
        if(result.status=="ok"){
            toast.success('Signed Up Successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }else{
            toast.error((result.msg || result.message), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
        return result.data;
    } catch (error) {
        toast.error((result.msg || result.message), {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        return rejectWithValue(error.response)
    }

})


//LoginUser
export const loginUser = createAsyncThunk("loginUser",async(data,rejectWithValue)=>{
    const response=await fetch('http://localhost:2000/login/user',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
        // body: data
    })

    try {
        const result=await response.json();
        console.log("LoginUser->",result.token);
        if(result.status==="ok"){
            console.log("Token Arha-> ",result.token)
            localStorage.setItem('token', result.token)
                toast.success('Login Successful', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
             return result.token;
        }else{
            console.log("What Happened ?")
            toast.error((result.msg || result.message), {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        } 
    } catch (error) {
        console.log("Nothng happened ")
        toast.error((result.msg || result.message), {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        return rejectWithValue(error.response)
    }

})


//GetAllUsers
export const getAllUsers = createAsyncThunk("getAllUsers",async(args,{rejectWithValue})=>{
    // console.log("hello")
    const response=await fetch('http://localhost:2000/getAll/user')
    try {
        const result=await response.json();
        console.log("AllUsers->",result.data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error)
    }

})


//GetSingleUsers
export const getSingleUser = createAsyncThunk("getSingleUser",async(args,{rejectWithValue})=>{
    // console.log("hello")
    const token = localStorage.getItem('token');
    console.log("bhayyyy> ",token);
    if(token){
        try {
            const response=await fetch('http://localhost:2000/get/user',{
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const result=await response.json();
            console.log("SingleUsers->",result.data);
            // nav("/")
            return result.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }

})


export const deleteUser = createAsyncThunk("deleteUser",async(data,rejectWithValue)=>{
    console.log("Data->",data)

    try {
        const response = await fetch(`http://localhost:2000/delete/user`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data)
                // `${console.log("userbody ",body)}`
        })
        console.log("Response-> ",response)
        const result = await response.json();
        console.log("afterDeleteUser->",result);
        // nav("/")
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response)
    }
    
})



const initialState={
    users:[],
    loading:false,
    error:null,
    SingleUser:{},
}

const userDetail=createSlice({
    name:"userDetail",
    initialState,
    extraReducers:{
        [createUser.pending]:(state)=>{
            state.loading=true;
        },
        [createUser.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("shit is this what ",action.payload)
            state.users.push(action.payload);
        },
        [createUser.rejected]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },


        [updateUser.pending]:(state)=>{
            state.loading=true;
        },
        [updateUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users.push(action.payload);
        },
        [updateUser.rejected]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },


        [loginUser.pending]:(state)=>{
            state.loading=true;
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.token=action.payload; 
            state.users.push(action.payload);
        },
        [loginUser.rejected]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },


        [getAllUsers.pending]:(state)=>{
            state.loading=true;
        },
        [getAllUsers.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },
        [getAllUsers.rejected]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },
        

        [getSingleUser.pending]:(state)=>{
            // console.log("chup Mc ?");
            state.loading=true;
        },
        [getSingleUser.fulfilled]:(state,action)=>{
            // console.log("Kuchh Huaa Kyya ?");
            state.loading=false;
            state.SingleUser=action.payload;
        },
        [getSingleUser.rejected]:(state,action)=>{
            state.loading=false;
            state.SingleUser=action.payload;
        },
        

        [deleteUser.pending]:(state)=>{
            // console.log("chup Mc ?");
            state.loading=true;
        },
        [deleteUser.fulfilled]:(state,action)=>{
            state.loading=false;
            console.log("Deleted Users-> ",action.payload)
            state.users=action.payload;
        },
        [deleteUser.rejected]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },
    }
})

// export const {setEmail,setPassword,setUniqueCode}=userDetail.actions

export default userDetail.reducer