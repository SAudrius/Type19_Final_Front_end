import { api } from "@api/instance";

export const getTown = async (id: number) => api.get<Town>(`/towns/${id}`);
