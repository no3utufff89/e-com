
import { AxiosResponse } from "axios";
import { SignInResponse } from "../types/types";
import instance from "../api/instance";

export default class LoginService {
    static async login(idInstance: string, apiTokenInstance: string):Promise<AxiosResponse<SignInResponse>> {
        return instance.get<SignInResponse>(`waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
    }
}
