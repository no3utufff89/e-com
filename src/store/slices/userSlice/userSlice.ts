import { createSlice } from "@reduxjs/toolkit";
import { AuthState, SignInResponse } from "../../../types/types";
import { signInUserRequest } from "./requests";

const initialState: AuthState<SignInResponse> = {
    isLoading: false,
    stateInstance: undefined
}
const usersSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
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
                state.stateInstance = action.payload;
            })
            .addCase(signInUserRequest.rejected, (state) => {
                state.isLoading = false;
            })
    }
    
    

});
export default usersSlice.reducer;