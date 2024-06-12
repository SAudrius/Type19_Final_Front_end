import { api } from "@api/instance";

export interface PostRefreshResponse {
  message: string;
  token: string;
}

export const PostRefresh = async (refreshToken: string) =>
  api.post<PostRefreshResponse>("/auth/refresh", {
    refreshToken,
  });
