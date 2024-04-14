import { api } from "@api/instance";

export interface PostRegisterBody {
  name: string;
  password: string;
  email: string;
  avatar_url: string;
}

export const postRegister = async (body: PostRegisterBody) =>
  api.post<ResponseMessageToken>("/auth/register", {
    ...body,
    withCredentials: true,
  });
