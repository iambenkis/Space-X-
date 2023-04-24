import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://127.0.0.1:3000/';

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: localStorage.getItem('token')
}

const api = {
    signup: createAsyncThunk(
        'users/user',
        async (data) => {
            try {
                const response = await axios.post(
                    `${URL}auth/signup`,
                    data,
                    {
                        headers
                    }
                )
                return response.data;
            } catch (error) {
                return error
            }
        }
    )
}

export default api