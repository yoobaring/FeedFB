import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { email: null, password: null },
    reducers: {
        setCredentials: (state, action) => {
            const { email, password } = action.payload
            state.email = email
            state.password = password
        },
        logOut: (state, action) => {
            state.email = null
            state.password = null
            sessionStorage.setItem('password', null)
            sessionStorage.setItem('email', null)
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

export const selectCurrentEmail = (state) => state.auth.email
export const selectCurrentToken = (state) => state.auth.token
