import { api } from "@api/instance";

export const getClassifiedAds = async () => api.get<ClassifiedAds[]>("/ads");
