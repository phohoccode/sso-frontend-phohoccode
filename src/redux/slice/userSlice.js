import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../custom/axios'

export const doLogin = createAsyncThunk('users/login', async (query) => {
    const response = await axios.post('/verifycation-token', {
        ssoToken: query.ssoToken,
        typeAccount: query.typeAccount
    })
    return response.DT
})

export const doGetAccount = createAsyncThunk('users/getAccount', async () => {
    const response = await axios.get('/api/v1/account')
    return response
})

export const doLogout = createAsyncThunk('users/getAccount', async () => {
    const response = await axios.get('/api/v1/logout')
    return response
})

export const doUpdateUser = createAsyncThunk('users/updateUser', async (data) => {
    const response = await axios.post('/api/v1/update-user', { ...data })
    return response.DT
})


const initialState = {
    userInfo: {
        username: '',
        email: '',
        phoneNumber: '',
        gender: '',
        address: '',
        access_token: '',
        refresh_token: '',
        type: ''
    },
    isLoading: false,
    isError: false
}

export const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doLogin.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(doLogin.fulfilled, (state, action) => {
            state.userInfo = action.payload
            state.isLoading = false
        })
        builder.addCase(doLogin.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
        })

        builder.addCase(doGetAccount.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(doGetAccount.fulfilled, (state, action) => {
            state.userInfo = action.payload
            state.isLoading = false
        })
        builder.addCase(doGetAccount.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
        })

        builder.addCase(doUpdateUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(doUpdateUser.fulfilled, (state, action) => {
            state.userInfo = action.payload
            state.isLoading = false
        })
        builder.addCase(doUpdateUser.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
        })
    },
})

export default userSlice.reducer