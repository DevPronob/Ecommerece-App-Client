import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../src/utilits/localStorage';
// import Swal from 'sweetalert2';
import customFetch from '../utilits/axios';
import Swal from 'sweetalert2';
const initialState ={
    isLoading:true,
    user:getUserFromLocalStorage(),
}


export const registerUser =createAsyncThunk('user/users',async(user,thunkAPI)=>{
    try{
        const resp =await customFetch.post('user/users',user)
        return resp.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
})

// export const updateUser =createAsyncThunk('user/login',async(user,thunkAPI) =>{
//     try{
//     const resp =await customFetch.patch('/auth/login',user,{
//       headers:{
//         authorization:`Bearer ${thunkAPI.getState().user.user.token}`
//       }
//     })
//     return resp.data;
//     }catch(error){
//         return thunkAPI.rejectWithValue(error.response.data.msg)
//     }
//     })
  
  export const loginUser =createAsyncThunk('user/login',async(user,thunkAPI) =>{
      try{
          const resp = await customFetch.post('/user/login',user)
          return resp.data
      } catch(error){
        console.log(error)
          return thunkAPI.rejectWithValue(error.response.data.msg)
      }
      })

const userSlice =createSlice({
    name:'user',
    initialState,
     reducers:{
        logOut :(state) =>{
          state.user=null,
          state.isOpenbar=false,
          removeUserFromLocalStorage()
        }
    },
      extraReducers: (builder) => {
        builder
          .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginUser.fulfilled, (state,{payload}) => {
            const {user} =payload;
            state.user = user;
            state.isLoading = false;
            addUserToLocalStorage(user);
            Swal.fire({
                title: "Success",
                text:`${payload.message} ${user.username}`,
                icon: "success"
              });
          })
          .addCase(loginUser.rejected, (state,{payload}) => {
            state.isLoading = false;
            Swal.fire({
                title: "Error",
                text:payload,
                icon: "error"
              });
          })





          .addCase(registerUser.fulfilled, (state, { payload }) => {
            const { user } = payload;
            console.log(user)
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            Swal.fire({
                title: "Success",
                text: `Register SuccessFul ${user.username}`,
                icon: "success"
              });
          })
          .addCase(registerUser.rejected, (state, { payload }) => {
            console.log(payload)
            state.isLoading = false;
            Swal.fire({
                title: payload,
                text:payload,
                icon: "error"
              });
              
          })}
})

export const {addUserData} = userSlice.actions;

export default userSlice.reducer;