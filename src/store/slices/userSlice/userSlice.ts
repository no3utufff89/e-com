import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../../types/types";
import { signInUserRequest } from "./requests";

const initialState: AuthState = {
    isLoading: false,
    hasError: false,
}
const usersSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        clearError: (state) => {
            state.hasError = false;
            state.statusText = undefined;
        }
    },
    selectors: {
    },
    extraReducers: (builder) => {
        builder
           .addCase(signInUserRequest.pending, (state) => {
                state.isLoading = true;
            })
           .addCase(signInUserRequest.fulfilled, (state, action) => {
            console.log(action.payload);
            
           state.isLoading = false; 
           if (action.payload === 'authorized') {
            state.statusText = action.payload;
            state.hasError = false;
           } else {
            state.statusText = action.payload;
            state.hasError = true;
           }
            })
            .addCase(signInUserRequest.rejected, (state) => {
                state.isLoading = false;
            })
    }
    
    

});
export const {clearError} = usersSlice.actions;
export default usersSlice.reducer;