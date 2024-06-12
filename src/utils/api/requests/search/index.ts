import { api } from "@api/instance";

export interface PostSearch {
  categoryId: number;
  townId: number;
  searchValue: string;
  limit: number;
  sortId?: number;
}

export const postSearch = ({
  searchValue,
  categoryId,
  townId,
  limit,
  sortId,
}: PostSearch) =>
  api.post<ClassifiedAd[]>("/search", {
    search: searchValue,
    category: categoryId,
    town: townId,
    limit: limit,
    sort: sortId,
  });
