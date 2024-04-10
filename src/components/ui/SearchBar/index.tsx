import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SearchInput, SearchSelect } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  getCategories,
  getClassifiedAds,
  getTowns,
} from "@/utils/api/requests";

interface SearchBarProps {
  className: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const navigate = useNavigate();
  const [classifiedAdsData, setClassifiedAdsData] = useState<ClassifiedAds[]>(
    [],
  );
  const [classifiedAdsDisplayData, setClassifiedAdsDisplayData] = useState<
    ClassifiedAds[]
  >([]);
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [townsData, setTownsData] = useState<Town[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = () => {
    navigate(`/list`);
  };

  useEffect(() => {
    const getInitialDataResponse = async () => {
      setLoading(true);
      try {
        const [categoriesResponse, townsResponse, classifiedAdsResponse] =
          await Promise.all([getCategories(), getTowns(), getClassifiedAds()]);
        setCategoriesData(categoriesResponse.data);
        setTownsData(townsResponse.data);
        setClassifiedAdsData(classifiedAdsResponse.data);
        setClassifiedAdsDisplayData(classifiedAdsResponse.data);
      } catch (err) {
        setError(true);
        console.log("@err", err);
      }
      setLoading(false);
    };
    getInitialDataResponse();
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-xl bg-white p-6 sm:p-8 lg:grid lg:grid-cols-9 lg:gap-0 lg:rounded-[20px] lg:p-0 xl:grid-cols-4",
        className,
      )}
    >
      <SearchInput
        classifiedAdsData={classifiedAdsData}
        setClassifiedAdsData={setClassifiedAdsData}
        classifiedAdsDisplayData={classifiedAdsDisplayData}
        setClassifiedAdsDisplayData={setClassifiedAdsDisplayData}
        classList="lg:col-span-3 lg:rounded-r-none lg:border-r-0 xl:col-span-1"
      />
      <SearchSelect
        dataTowns={townsData}
        defaultValue="Select Town"
        loading={loading}
        error={error}
        classList={cn(
          "lg:border-r-0 lg:rounded-none lg:border-l-0 lg:col-span-2 xl:col-span-1",
        )}
      />
      <SearchSelect
        dataCategories={categoriesData}
        defaultValue="Select Category"
        loading={loading}
        error={error}
        classList={cn(
          "lg:border-r-0 lg:rounded-none lg:border-l-0 lg:col-span-2 xl:col-span-1",
        )}
      />
      <button
        onClick={handleSearch}
        className="h-12 cursor-pointer rounded-[20px] bg-secondary px-4 py-[14px] font-bold uppercase leading-3 tracking-widest hover:bg-primary lg:col-span-2 lg:rounded-l-none xl:col-span-1 "
      >
        Submit
      </button>
    </div>
  );
};
