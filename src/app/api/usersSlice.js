import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {users: []},
    reducers: {
        setAllusers : (state, action) => {
          state.users = [...action.payload]
        },
      },
})

export const { setAllusers } = usersSlice.actions
export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer

