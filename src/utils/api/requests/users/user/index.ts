import { api, authApi } from "@api/instance";

export interface UserResponse {
  name: string;
  email: string;
  avatar_url: string;
}
export interface UpdateUser {
  name: string;
  email: string;
  avatarUrl: string;
  password: string;
}

export const postUser = async (token: string) =>
  api.post<User>(
    "/users/user",
    { token: token },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

export const updateUser = async (token: string, body: UpdateUser) =>
  authApi(token).put("/users/user", {
    ...body,
  });
