import { baseAPI } from "../../API/baseAPI";
import { LoginRequest, LoginResponse } from "../../Types/LoginTypes";

const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = authAPI;
