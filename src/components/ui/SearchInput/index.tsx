import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useAppSelector } from "@/lib/store/hooks";
import { setSearchValue } from "@/lib/store/SearchReducer";
import { cn } from "@/lib/utils";
import { PostSearch, postSearch } from "@/utils/api/requests";
import { filterClassiefiedAdsData } from "@/utils/helpers";
import { useClickRemoveClickOutside } from "@/utils/hooks/useClickRemoveClickOutside";

interface SearchInputProps {
  classifiedAdsData: ClassifiedAd[];
  setClassifiedAdsData: React.Dispatch<React.SetStateAction<ClassifiedAd[]>>;
  classifiedAdsDisplayData: ClassifiedAd[];
  setClassifiedAdsDisplayData: React.Dispatch<
    React.SetStateAction<ClassifiedAd[]>
  >;
  className?: string;
  classNameInput: string;
}
export const SearchInput = ({
  classifiedAdsData,
  setClassifiedAdsData,
  classifiedAdsDisplayData,
  setClassifiedAdsDisplayData,
  className,
  classNameInput,
}: SearchInputProps) => {
  const inputDivRef = useRef<HTMLDivElement>(null);
  const [inputActive, setInputActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const categoryId = useAppSelector((state) => state.search.categoryId);
  const stringValue = useAppSelector((prev) => prev.search.searchValue);
  const townId = useAppSelector((state) => state.search.townId);
  const limit = useAppSelector((state) => state.search.limit);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(
    useAppSelector((state) => state.search.searchValue),
  );

  useEffect(() => setInputValue(stringValue), [stringValue]);

  const handleFocus = async (e: React.FocusEvent<HTMLInputElement>) => {
    setInputActive(true);
    const searchString = (e.target as HTMLInputElement).value;
    dispatch(setSearchValue(searchString));
    const objToSend: PostSearch = {
      categoryId,
      townId,
      searchValue: searchString,
      limit: limit,
    };
    try {
      const searchResponse = await postSearch(objToSend);
      if (searchResponse.data.length === 0) {
        setClassifiedAdsData([]);
        return;
      }
      setClassifiedAdsData(searchResponse.data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      const searchString = (e.target as HTMLInputElement).value;
      console.log("searchString ===", searchString);
      dispatch(setSearchValue(searchString));
      const filteredClassiefiedAdsData = filterClassiefiedAdsData(
        classifiedAdsData,
        townId,
        categoryId,
        searchString,
      );

      if (filteredClassiefiedAdsData.length > 2) {
        setClassifiedAdsDisplayData(filteredClassiefiedAdsData);
        return;
      }
      // Fetch to server then
      setLoading(true);
      const objToSend: PostSearch = {
        categoryId,
        townId,
        searchValue: searchString,
        limit: limit,
      };
      const searchResponse = await postSearch(objToSend);
      if (searchResponse.data.length === 0) {
        setClassifiedAdsData([]);
        setClassifiedAdsDisplayData([]);
        return;
      }
      setClassifiedAdsData(searchResponse.data);
      setClassifiedAdsDisplayData(searchResponse.data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useClickRemoveClickOutside(inputDivRef, setInputActive);

  return (
    <div ref={inputDivRef} className={cn("relative", className)}>
      <input
        className={cn(
          "h-12 w-full rounded-[20px] border border-secondary/50 px-4 py-3 text-black outline-none focus:border-2 focus:border-secondary lg:col-span-3 lg:rounded-r-none lg:border-r-0 xl:col-span-1",
          classNameInput,
        )}
        type="text"
        onKeyUp={(e) => handleKeyUp(e)}
        onFocus={(e) => handleFocus(e)}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="What are you looking for?"
      />
      <ul
        className={cn(
          "absolute right-0 top-[46px] z-10 mx-4 max-h-44 w-60 flex-col overflow-auto rounded bg-[#FCFCFC] text-black shadow-2xl lg:mx-0",
          { hidden: !inputActive },
          { flex: inputActive },
        )}
      >
        {inputActive &&
          !loading &&
          !error &&
          classifiedAdsDisplayData.map((classifiedAd) => (
            <Link
              key={`classifiedAd-${classifiedAd.id}`}
              to={`/classified-ad/${classifiedAd.id}`}
            >
              <li className="cursor-pointer border-b border-black/10 px-4 py-2 lowercase hover:bg-secondary">
                {classifiedAd.title}
              </li>
            </Link>
          ))}
        {loading && !error && (
          <li className="cursor-pointer border-b border-black/10 px-4 py-2 lowercase hover:bg-secondary">
            loading...
          </li>
        )}
        {error && !loading && (
          <li className="cursor-pointer border border-black/10 border-red-400 px-4 py-2 lowercase hover:bg-secondary">
            Somethink went wrong
          </li>
        )}
      </ul>
    </div>
  );
};
