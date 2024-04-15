import { authApi } from "@/utils/api/instance";

export const updateClassifiedAdPublic = (token: string, id: number) =>
  authApi(token).patch(`/classified-ads/public/${id}`);
