import { api } from "@api/instance";

export const getCategories = async () => api.get<Category[]>("/categories");
