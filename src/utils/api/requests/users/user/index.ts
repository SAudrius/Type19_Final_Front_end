import { api } from "@api/instance";

export interface UserResponse {
  name: string;
  email: string;
  avatar_url: string;
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
