import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { SignInRequest } from "../../../types/types";
import LoginService from "../../../services/loginService";



export const signInUserRequest = createAsyncThunk(
    'users/login',
    async (user: SignInRequest) => {
        const {idInstance, apiTokenInstance} = user;
        try {
            const response = await LoginService.login(idInstance, apiTokenInstance);    
            console.log(response);
                   
            return response.data.stateInstance;
        } catch (error) {
            if(isAxiosError(error)) {
                console.log(`error`, error.message);
                
                throw new Error('Network Errorsdfsdfsf');
           
        }
    }
    }
);

