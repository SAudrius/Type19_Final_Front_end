import { ListCardSkeleton, ListSortSection } from "@pages/ListPage/section";

import { ListCard } from "../../../../components/ui/ListCard";

interface ListCardSectionProps {
  classifiedAdsDisplayData: ClassifiedAd[];
  classifiedAdsCount: CountResult[];
  cardsLoading: boolean;
  cardsError: boolean;
}

export const ListCardsSection = ({
  classifiedAdsDisplayData,
  classifiedAdsCount,
  cardsLoading,
  cardsError,
}: ListCardSectionProps) => {
  return (
    <div className="grid gap-6">
      <ListSortSection classifiedAdsCount={classifiedAdsCount} />
      {cardsLoading && !cardsError && <ListCardSkeleton />}
      {!cardsLoading && cardsError && (
        <div className=" flex h-[80vh] w-full items-center justify-center text-3xl font-medium text-red-400 ">
          Somethink went wrong
        </div>
      )}
      {classifiedAdsDisplayData.length > 0 && (
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {classifiedAdsDisplayData &&
            classifiedAdsDisplayData.map((classifiedAd) => (
              <ListCard key={classifiedAd.id} classifiedAd={classifiedAd} />
            ))}
        </div>
      )}
      {classifiedAdsDisplayData.length < 1 && !cardsError && !cardsLoading && (
        <div className="grid w-full gap-6 ">
          <h2 className="text-center text-lg tracking-wider ">
            Data not found
          </h2>
        </div>
      )}
    </div>
  );
};
