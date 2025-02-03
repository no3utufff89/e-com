
import { AxiosResponse } from "axios";
import instance from "../api/instance";
import { SignInResponse } from "../types/types";

export default class LoginService {
    static async login(idInstance: string, apiTokenInstance: string):Promise<AxiosResponse<SignInResponse>>{
        return instance.get<SignInResponse>(`waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
    }
}
