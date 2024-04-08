import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { getCategories } from "@/utils/api/requests/categories";
import { getTowns } from "@/utils/api/requests/towns";

import { SearchSelect } from "..";

interface SearchBarProps {
  className: string;
}
interface SearchDataError {
  category: boolean;
  town: boolean;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const navigate = useNavigate();
  const [searchData, setSeachData] = useState<SearchData>({
    category: 0,
    town: 0,
  });
  const [searchError, setSearchError] = useState<SearchDataError>({
    category: false,
    town: false,
  });
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [townsData, setTownsData] = useState<Town[]>([]);

  const handleSearch = () => {
    console.log(searchData);

    if (!searchData.town && !searchData.category) {
      setSearchError({
        town: true,
        category: true,
      });
      return;
    }

    if (!searchData.town || !searchData.category) {
      setSearchError({
        town: !searchData.town,
        category: !searchData.category,
      });
      return;
    }

    setSearchError((prevState) => ({
      ...prevState,
      town: false,
      category: false,
    }));
    console.log("redirect");
    const searchUrl = `category=${searchData.category}&town=${searchData.town}`;
    console.log("searchUrl ===", searchUrl);
    navigate(`/list?${searchUrl}`);
  };

  useEffect(() => {
    const getCategoriesResponse = async () => {
      try {
        const categoriesResponse = await getCategories();
        setCategoriesData(categoriesResponse.data);
      } catch (err) {
        console.log("@error");
      }
    };
    const getTownsResponse = async () => {
      try {
        const townsResponse = await getTowns();
        setTownsData(townsResponse.data);
      } catch (err) {
        console.log("@error");
      }
    };
    getTownsResponse();
    getCategoriesResponse();
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-xl bg-white p-6 sm:p-8 lg:grid lg:grid-cols-9 lg:gap-0 lg:rounded-[20px] lg:p-0 xl:grid-cols-4",
        className,
      )}
    >
      <input
        className="xl:cols-1 h-12 rounded-[20px] border border-secondary/50 px-4 py-3 text-black outline-none focus:border-2 focus:border-secondary lg:col-span-3 lg:rounded-r-none lg:border-r-0 xl:col-span-1"
        type="text"
        placeholder="What are you looking for?"
      />
      <SearchSelect
        setData={setSeachData}
        classList={cn(
          "lg:border-r-0 lg:rounded-none lg:border-l-0 lg:col-span-2 xl:col-span-1",
          { "border-red-500": searchError.town },
        )}
        dataTowns={townsData}
        defaultValue="Select Town"
      />
      <SearchSelect
        // ref={categoryRef}
        setData={setSeachData}
        classList={cn(
          "lg:border-r-0 lg:rounded-none lg:border-l-0 lg:col-span-2 xl:col-span-1",
          { "border-red-500": searchError.category },
        )}
        dataCategories={categoriesData}
        defaultValue="Select Category"
      />
      <button
        onClick={handleSearch}
        className="h-12 rounded-[20px] bg-secondary px-4 py-[14px] font-bold uppercase leading-3 tracking-widest lg:col-span-2 lg:rounded-l-none xl:col-span-1 "
      >
        Submit
      </button>
    </div>
  );
};
