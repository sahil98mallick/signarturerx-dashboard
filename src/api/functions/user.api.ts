import axiosInstance from "api/axiosInstance";
import { endpoints } from "api/endpoints";
import { LoginSchemaFormData } from "pages/auth/Login/Login";
import { ILoginResponse, IloginData, IuserProfileResponse } from "typescript/interface/auth.interface";
import { BaseApiResponse } from "typescript/interface/common.interface";

export const loginFunction = async (data: LoginSchemaFormData) => {
    const res = await axiosInstance.post<BaseApiResponse<IloginData>>(
        endpoints.auth.login,
        data
    );
    return res;
};

export const getAccountUserQuery = async (signal?: AbortSignal) => {
    const res = await axiosInstance.get<IuserProfileResponse>(
        endpoints.auth.userdetails,
        { signal }
    );

    return res;
};