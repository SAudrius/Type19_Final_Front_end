import { api, authApi } from "@api/instance";

export const getClassifiedAds = async () =>
  api.get<ClassifiedAd[]>("/classified-ads");

export const deleteClassifiedAds = async (token: string, id: number) =>
  authApi(token).delete<ClassifiedAd[]>(`/classified-ads/${id}`);
