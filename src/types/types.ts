//SignInRequest
export interface SignInRequest {
    idInstance: string;
    apiTokenInstance: string;
}
export type SignInResponse = {
    stateInstance: string | undefined;
}

//User
export interface AuthState<T> {
    isLoading: boolean;
    stateInstance: T | undefined;

}