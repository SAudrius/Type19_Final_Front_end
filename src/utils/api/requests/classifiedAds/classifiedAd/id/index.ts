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
  isPublished: number;
}

export const postClassifiedAd = async (body: postClassfiedAd, token: string) =>
  authApi(token).post<ClassifiedAd[]>(`/classified-ads`, { ...body });

export const getClassifiedAd = async (id: number) =>
  api.get<ClassifiedAd>(`/classified-ads/${id}`);
