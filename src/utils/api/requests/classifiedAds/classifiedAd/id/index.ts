import { api } from "@api/instance";

export const getClassifiedAd = async (id: number) =>
  api.get<ClassifiedAd>(`/classified-ads/${id}`);
