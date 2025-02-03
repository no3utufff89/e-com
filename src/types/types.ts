//SignInRequest
export interface SignInRequest {
    idInstance: string;
    apiTokenInstance: string;
}
export type SignInResponse = {
    stateInstance: string;
}
export interface AuthResponse<T> {
    stateInstance: string | undefined;
    user: T | undefined;
  }

  //Phone
  export interface NewPhone {
    phone: string;
  }