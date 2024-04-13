import { ListAdvanceSearch } from "..";

interface ListFilterSection {
  classifiedAdsData: ClassifiedAd[];
  setClassifiedAdsData: React.Dispatch<React.SetStateAction<ClassifiedAd[]>>;
  classifiedAdsDisplayData: ClassifiedAd[];
  setClassifiedAdsDisplayData: React.Dispatch<
    React.SetStateAction<ClassifiedAd[]>
  >;
  setclassifiedAdsCount: React.Dispatch<React.SetStateAction<CountResult[]>>;
  setCardsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  // setCardsError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ListFilterSection = ({
  classifiedAdsData,
  classifiedAdsDisplayData,
  setClassifiedAdsData,
  setClassifiedAdsDisplayData,
  setclassifiedAdsCount,
  setCardsLoading,
}: ListFilterSection) => {
  return (
    <>
      <ListAdvanceSearch
        classifiedAdsData={classifiedAdsData}
        classifiedAdsDisplayData={classifiedAdsDisplayData}
        setClassifiedAdsData={setClassifiedAdsData}
        setClassifiedAdsDisplayData={setClassifiedAdsDisplayData}
        setCardsLoading={setCardsLoading}
        setclassifiedAdsCount={setclassifiedAdsCount}
      />
    </>
  );
};
