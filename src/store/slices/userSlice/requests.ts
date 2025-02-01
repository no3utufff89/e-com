import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { SignInRequest } from "../../../types/types";
import LoginService from "../../../services/LoginService";



export const signInUserRequest = createAsyncThunk(
    'users/login',
    async (user: SignInRequest) => {
        const {idInstance, apiTokenInstance} = user;
        try {
            const response = await LoginService.login(idInstance, apiTokenInstance);                   
            return response.data.stateInstance;
        } catch (error) {
            if(isAxiosError(error)) {
                return error.message
        } else if (error instanceof Error) {
            return error.message;
        }
    }
    }
);

