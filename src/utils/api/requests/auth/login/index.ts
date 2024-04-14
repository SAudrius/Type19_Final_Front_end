import { api } from "@api/instance";

export interface PostLoginBody {
  email: string;
  password: string;
}

export const postLogin = async (body: PostLoginBody) =>
  api.post<ResponseMessageToken>("/auth/login", {
    ...body,
  });
