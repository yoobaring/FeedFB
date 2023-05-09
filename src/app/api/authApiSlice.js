import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/signin',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        signup: builder.mutation({
            query: createusers => ({
                url: '/signup',
                method: 'POST',
                body: { ...createusers }
            })
        }),
        forgetpwd: builder.mutation({
            query: body => ({
                url: '/forget-password',
                method: 'POST',
                body: { ...body }
            })
        })
    })
})

export const {
    useLoginMutation,
    useSignupMutation,
    useForgetpwdMutation,
} = authApiSlice