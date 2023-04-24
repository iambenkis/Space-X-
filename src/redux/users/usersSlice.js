import { createSlice } from '@reduxjs/toolkit'
import api from '../Endpoints/api';

const initialState = {
    Loading: false,
    isAuthenticated : false,
    errorMessages: {
        error: []
    },
    token: "",
    user: '',
    message: ''
}

export const userSignUp = api.signup;

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(userSignUp.fulfilled, (state, { payload }) =>{
            if ('id' in payload) {
                return {
                    ...state,
                    errorMessages: {error:[]},
                    message: 'User successfully created'
                }
            }
            return {
                ...state,
                errorMessages: payload.response.data,
                message: null
            }
        })

        builder.addCase(userSignUp.rejected, (state) => ({
            ...state,
            errorMessages: { error: ['server error']},
            message: null
        }))
    }
})

export const {
    passwordMismatch, getData, addToken, addUser, logout,
  } = userSlice.actions;
  
  export default userSlice.reducer;