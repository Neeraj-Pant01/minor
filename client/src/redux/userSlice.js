import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null
  }

  export const userSlice = createSlice({
    name: "itgCartUser",
    initialState,
    reducers:{
        login: (state, action) =>{
            state.currentUser = action.payload;
        }
    }
  })

  export const {login} = userSlice.actions;
  export default userSlice.reducer;