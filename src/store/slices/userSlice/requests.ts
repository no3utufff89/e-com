import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { SignInRequest } from "../../../types/types";
import LoginService from "../../../services/LoginService";



export const signInUserRequest = createAsyncThunk(
    'users/login',
    async (user: SignInRequest, {rejectWithValue}) => {

        try {
             const response = await LoginService.login(user.idInstance, user.apiTokenInstance);
             return response;
        } catch (error) {
          if(isAxiosError(error)) {
            return rejectWithValue(error.message = 'Ошибка логина или пароля');
          }
        }
    }
);