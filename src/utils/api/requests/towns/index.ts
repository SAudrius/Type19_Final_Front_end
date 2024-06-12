import { api } from "@api/instance";

export const getTowns = async () => api.get<Town[]>("/towns");
