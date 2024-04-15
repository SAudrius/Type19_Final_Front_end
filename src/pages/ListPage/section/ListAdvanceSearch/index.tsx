import { useAppDispatch, useAppSelector } from "@lib/store/hooks";
import {
  setSearchCategoryId,
  setSearchCategoryName,
  setSearchTownId,
  setSearchTownName,
  setSearchValue,
} from "@lib/store/SearchReducer";
import { cn } from "@lib/utils";
import { getCategories, getTowns, PostSearch, postSearch } from "@utils/api";
import { postSearchCount } from "@utils/api/requests/search/count";
import { useEffect, useState } from "react";

import { Line, SearchInput, SearchSelect } from "@/components/ui";

interface ListAdvanceSearchProps {
  classifiedAdsData: ClassifiedAd[];
  setClassifiedAdsData: React.Dispatch<React.SetStateAction<ClassifiedAd[]>>;
  classifiedAdsDisplayData: ClassifiedAd[];
  setClassifiedAdsDisplayData: React.Dispatch<
    React.SetStateAction<ClassifiedAd[]>
  >;
  setCardsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setclassifiedAdsCount: React.Dispatch<React.SetStateAction<CountResult[]>>;
}

export const ListAdvanceSearch = ({
  classifiedAdsData,
  classifiedAdsDisplayData,
  setClassifiedAdsData,
  setClassifiedAdsDisplayData,
  setCardsLoading,
  setclassifiedAdsCount,
}: ListAdvanceSearchProps) => {
  const categoryId = useAppSelector((state) => state.search.categoryId);
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const townId = useAppSelector((state) => state.search.townId);
  const limit = useAppSelector((state) => state.search.limit);
  const dispatch = useAppDispatch();
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [townsData, setTownsData] = useState<Town[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClearFilters = async () => {
    setCardsLoading(true);
    const filtersData: PostSearch = {
      categoryId,
      townId,
      searchValue,
      limit,
    };
    try {
      const classfiedAdsSearchResponse = await postSearch(filtersData);
      const postSearchResponse = await postSearchCount(filtersData);
      setclassifiedAdsCount(postSearchResponse.data);
      setClassifiedAdsData(classfiedAdsSearchResponse.data);
      setClassifiedAdsDisplayData(classfiedAdsSearchResponse.data);
      dispatch(setSearchCategoryId(0));
      dispatch(setSearchCategoryName("Select Category"));
      dispatch(setSearchTownId(0));
      dispatch(setSearchTownName("Select Town"));
      dispatch(setSearchValue(""));
    } catch {
      // setCardError();
    }

    setCardsLoading(false);
  };

  useEffect(() => {
    const getIntialData = async () => {
      setLoading(true);
      try {
        const categoireshResponse = await getCategories();
        const townshResponse = await getTowns();
        setCategoriesData(categoireshResponse.data);
        setTownsData(townshResponse.data);
      } catch {
        setError(true);
      }
      setLoading(false);
    };
    getIntialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full self-start rounded-xl border border-black/30 bg-white p-4">
      <div className="grid grid-cols-2">
        <p className="text-lg font-medium">ListAdvanceSearch</p>
        <button
          onClick={handleClearFilters}
          className="justify-self-end tracking-wide text-black/50"
        >
          Clear all
        </button>
        <Line className="col-span-2 mt-4" />
        <div className="col-span-2 mt-4 grid">
          <SearchInput
            classNameInput="rounded-[20px] lg:rounded-r-[20px] lg:border-r"
            classifiedAdsData={classifiedAdsData}
            setClassifiedAdsData={setClassifiedAdsData}
            classifiedAdsDisplayData={classifiedAdsDisplayData}
            setClassifiedAdsDisplayData={setClassifiedAdsDisplayData}
          />
          <SearchSelect
            dataTowns={townsData}
            loading={loading}
            error={error}
            className={cn("mt-4")}
          />
          <SearchSelect
            dataCategories={categoriesData}
            loading={loading}
            error={error}
            className={cn("mt-4")}
          />
        </div>
      </div>
    </div>
  );
};
