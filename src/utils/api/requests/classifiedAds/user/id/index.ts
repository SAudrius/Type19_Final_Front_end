import { authApi } from "@api/instance";

// export const getClassifiedAdsByUser = async (token: string) =>
//   api.post<ClassifiedAd[]>(`/classified-ads/user`, { token: token });

export const getClassifiedAdsByUser = async (token: string) =>
  authApi(token).post<ClassifiedAd[]>("/classified-ads/user");
