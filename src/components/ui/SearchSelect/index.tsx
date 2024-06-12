import { Arrow } from "@components/ui";
import { useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  setSearchCategoryId,
  setSearchCategoryName,
  setSearchSortId,
  setSearchTownId,
  setSearchTownName,
} from "@/lib/store/SearchReducer";
import { cn } from "@/lib/utils";
import { useClickRemoveClickOutside } from "@/utils/hooks/useClickRemoveClickOutside";

import { SearchError } from "../SearchError";
import { SearchLoading } from "../SearchLoading";
import { SearchOption } from "../SearchOption";

interface SearchSelectProps {
  defaultValue?: string;
  dataCategories?: Category[];
  dataTowns?: Town[];
  sortOptions?: SortOptions[];
  className?: string;
  error?: boolean;
  loading?: boolean;
}

export const SearchSelect = ({
  defaultValue,
  dataCategories,
  dataTowns,
  sortOptions,
  className,
  error,
  loading,
}: SearchSelectProps) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useAppDispatch();
  const categorySelected = useAppSelector((state) => state.search.categoryName);
  const TownSelected = useAppSelector((state) => state.search.townName);
  const [selectedDefault, setSelectedDefault] = useState(defaultValue);

  const handleSelect = () => {
    setIsSelected((prevState) => !prevState);
  };

  const handleOptionSelect = (
    fieldName: string,
    id: number,
    type: "category" | "town" | "option",
  ) => {
    if (type === "town") {
      dispatch(setSearchTownId(id));
      dispatch(setSearchTownName(fieldName));
      return;
    }
    if (type === "option") {
      setSelectedDefault(fieldName);
      dispatch(setSearchSortId(id));
      return;
    }
    dispatch(setSearchCategoryId(id));
    dispatch(setSearchCategoryName(fieldName));
  };

  useClickRemoveClickOutside(dropDownRef, setIsSelected);

  return (
    <div
      ref={dropDownRef}
      onClick={handleSelect}
      aria-haspopup="listbox"
      className={cn(
        "relative flex h-12 cursor-pointer items-center justify-between rounded-[20px] border border-secondary/50 px-5 py-3 text-black outline-none",
        className,
        { "gap-3": sortOptions },
        {
          "border-2 border-secondary border-secondary/50 lg:border-2 ":
            isSelected,
        },
      )}
    >
      <span className={cn("capitalize text-black/80")}>
        {dataCategories && categorySelected}
        {dataTowns && TownSelected}
        {selectedDefault && selectedDefault}
      </span>
      <ul
        className={cn(
          "absolute right-0 top-[46px] z-10 mx-4 max-h-44 w-60 flex-col overflow-auto rounded bg-[#FCFCFC] shadow-2xl lg:mx-0",
          { hidden: !isSelected },
          { flex: isSelected },
        )}
      >
        {dataCategories &&
          !loading &&
          !error &&
          dataCategories.map((category) => (
            <SearchOption
              key={category.id}
              id={category.id}
              name={category.name}
              stringType="category"
              handleOptionSelect={handleOptionSelect}
            />
          ))}
        {dataTowns &&
          !loading &&
          !error &&
          dataTowns.map((town) => (
            <SearchOption
              key={town.id}
              id={town.id}
              name={town.name}
              stringType="town"
              handleOptionSelect={handleOptionSelect}
            />
          ))}
        {sortOptions &&
          sortOptions.map((mode) => (
            <SearchOption
              key={mode.id}
              id={mode.id}
              name={mode.name}
              stringType="option"
              handleOptionSelect={handleOptionSelect}
            />
          ))}
        {!error && loading && <SearchLoading />}
        {!loading && error && <SearchError />}
      </ul>
      <span>
        <Arrow />
      </span>
    </div>
  );
};
