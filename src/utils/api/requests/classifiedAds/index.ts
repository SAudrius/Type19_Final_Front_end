import { api, authApi } from "@api/instance";

export interface postClassfiedAd {
  title: string;
  description: string;
  price: number;
  phone: number;
  type: string;
  town: string;
  category: string;
  image_main: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  isPublished: number | string;
}

export const getClassifiedAds = async () =>
  api.get<ClassifiedAd[]>("/classified-ads");

export const deleteClassifiedAds = async (token: string, id: number) =>
  authApi(token).delete<ClassifiedAd[]>(`/classified-ads/${id}`);

export const postClassifiedAd = async (body: postClassfiedAd, token: string) =>
  authApi(token).post<ClassifiedAd[]>(`/classified-ads`, { ...body });
