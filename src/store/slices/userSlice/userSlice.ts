import { createSlice } from "@reduxjs/toolkit";
import { signInUserRequest } from "./requests";
import { AuthResponse, SignInRequest } from "../../../types/types";

interface IUserState {
    isLoading: boolean;
    hasError: boolean;
    statusText: string | undefined | unknown;
    userData: AuthResponse<SignInRequest>
}
const initialState: IUserState = {
        isLoading: false,
        hasError: false,
        statusText: '',
        userData: {
            stateInstance: '',
            user: undefined
        },
    
}
const usersSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state,action) => {
            state.userData.user = action.payload;
        },
        clearError: (state) => {
            state.hasError = false;
        }
    },
   extraReducers(builder) {
       builder
       .addCase(signInUserRequest.pending, (state) => {
           state.isLoading = true;
        })
        .addCase(signInUserRequest.fulfilled, (state, action) => {
           state.isLoading = false;
           state.userData.stateInstance = action.payload?.data.stateInstance;
           state.hasError = false;
           state.statusText = action.payload?.statusText;
        })
        .addCase(signInUserRequest.rejected, (state, action) => {
           state.isLoading = false;
           state.hasError = true;
           state.statusText = action.payload;
        })
   },
})
export const { setUser, clearError } = usersSlice.actions;
export default usersSlice.reducer;