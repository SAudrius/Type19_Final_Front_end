import { api } from "@api/instance";

export const getClassifiedAdsByUser = async (token: string) =>
  api.post<ClassifiedAd[]>(`/classified-ads/user`, { token: token });
