import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
export interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}
interface IRegisterUserResponse {
  status: number;
  user_id: number;
}
interface ILoginUserPayload {
  email: string;
  password: string;
}

interface ILoginUserResponse extends IRegisterUserResponse {}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>(
      {
        query: (payloud) => ({
          url: "/registration",
          method: "POST",
          body: payloud,
        }),
      }
    ),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (payloud) => ({
        url: "/login",
        method: "POST",
        body: payloud,
      }),
    }),
  }),
});
export const { useRegisterUserMutation ,useLoginUserMutation } = authApi;