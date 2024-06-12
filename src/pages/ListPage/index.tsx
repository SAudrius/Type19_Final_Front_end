import { useAppSelector } from "@lib/store/hooks";
import { ListCardsSection, ListFilterSection } from "@pages/ListPage/section";
import { PostSearch, postSearch } from "@utils/api";
import { postSearchCount } from "@utils/api/requests/search/count";
import { useEffect, useState } from "react";

export const ListPage = () => {
  const categoryId = useAppSelector((state) => state.search.categoryId);
  const sortId = useAppSelector((state) => state.search.sortId);
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const townId = useAppSelector((state) => state.search.townId);
  const limit = useAppSelector((state) => state.search.limit);

  const [classifiedAdsData, setClassifiedAdsData] = useState<ClassifiedAd[]>(
    [],
  );

  const [classifiedAdsCount, setclassifiedAdsCount] = useState<CountResult[]>(
    [],
  );

  const [classifiedAdsDisplayData, setClassifiedAdsDisplayData] = useState<
    ClassifiedAd[]
  >([]);

  const [cardsLoading, setCardsLoading] = useState(false);
  const [cardsError, setCardsError] = useState(false);

  const filtersData: PostSearch = {
    searchValue,
    categoryId,
    sortId,
    townId,
    limit,
  };

  useEffect(() => {
    const getIntialCards = async () => {
      setCardsLoading(true);
      try {
        const classfiedAdsSearchResponse = await postSearch(filtersData);
        const postSearchResponse = await postSearchCount(filtersData);
        setclassifiedAdsCount(postSearchResponse.data);
        setClassifiedAdsData(classfiedAdsSearchResponse.data);
        setClassifiedAdsDisplayData(classfiedAdsSearchResponse.data);
      } catch {
        setCardsError(true);
      }
      setCardsLoading(false);
    };
    getIntialCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortId, categoryId, townId]);

  return (
    <div className="container mt-8 grid gap-4 md:gap-6 lg:grid-cols-[320px_1fr] xl:gap-8">
      {classifiedAdsDisplayData && (
        <>
          <ListFilterSection
            classifiedAdsData={classifiedAdsData}
            classifiedAdsDisplayData={classifiedAdsDisplayData}
            setClassifiedAdsData={setClassifiedAdsData}
            setClassifiedAdsDisplayData={setClassifiedAdsDisplayData}
            setclassifiedAdsCount={setclassifiedAdsCount}
            setCardsLoading={setCardsLoading}
          />
          <ListCardsSection
            classifiedAdsCount={classifiedAdsCount}
            classifiedAdsDisplayData={classifiedAdsDisplayData}
            cardsLoading={cardsLoading}
            cardsError={cardsError}
          />
        </>
      )}
    </div>
  );
};
