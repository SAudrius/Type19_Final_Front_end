import { api } from "@api/instance";

import { SearchState } from "@/lib/store/SearchReducer";

export const postSearch = ({
  searchValue,
  categoryId,
  townId,
  limit,
}: SearchState) =>
  api.post<ClassifiedAds[]>("/search", {
    search: searchValue,
    category: categoryId,
    town: townId,
    limit: limit,
  });
