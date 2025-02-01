//SignInRequest
export interface SignInRequest {
    idInstance: string;
    apiTokenInstance: string;
}
export type SignInResponse = {
    stateInstance: string | undefined;
}

//User
export interface AuthState {
    isLoading: boolean;
    statusText?: string;
    hasError: boolean;

}