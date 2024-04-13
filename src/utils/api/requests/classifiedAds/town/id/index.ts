import { api } from "@api/instance";

export const getClassifiedAdsByTown = async (id: number) =>
  api.get<ClassifiedAd[]>(`/classified-ads/town/${id}`);
