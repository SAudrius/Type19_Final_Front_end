import { api } from "@api/instance";

export interface PostSearchCount {
  categoryId: number;
  townId: number;
  searchValue: string;
  limit: number;
  sortId?: number;
}

export const postSearchCount = ({
  searchValue,
  categoryId,
  townId,
  limit,
  sortId,
}: PostSearchCount) =>
  api.post<CountResult[]>("/search/count", {
    search: searchValue,
    category: categoryId,
    town: townId,
    limit: limit,
    sort: sortId,
  });
