import { Arrow } from "@components/ui";
import { useRef, useState } from "react";

import { useAppDispatch } from "@/lib/store/hooks";
import {
  setSearchCategoryId,
  setSearchTownId,
} from "@/lib/store/SearchReducer";
import { cn } from "@/lib/utils";
import { useClickRemoveClickOutside } from "@/utils/hooks/useClickRemoveClickOutside";

import { SearchError } from "../SearchError";
import { SearchLoading } from "../SearchLoading";
import { SearchOption } from "../SearchOption";

interface SearchSelectProps {
  defaultValue: string;
  classList?: string;
  dataCategories?: Category[];
  dataTowns?: Town[];
  error: boolean;
  loading: boolean;
}

export const SearchSelect = ({
  classList,
  dataCategories,
  dataTowns,
  defaultValue,
  error,
  loading,
}: SearchSelectProps) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [dataSelected, setDataSelected] = useState(defaultValue);

  const dispatch = useAppDispatch();

  const handleSelect = () => {
    setIsSelected((prevState) => !prevState);
  };

  const handleOptionSelect = (
    fieldName: string,
    id: number,
    type: "category" | "town",
  ) => {
    setDataSelected(fieldName);
    if (type === "town") {
      dispatch(setSearchTownId(id));
      return;
    }
    dispatch(setSearchCategoryId(id));
  };

  useClickRemoveClickOutside(dropDownRef, setIsSelected);

  return (
    <div
      ref={dropDownRef}
      onClick={handleSelect}
      aria-haspopup="listbox"
      className={cn(
        "relative flex h-12 cursor-pointer items-center justify-between rounded-[20px] border border-secondary/50 px-5 py-3 text-black outline-none",
        classList,
        {
          "border-2 border-secondary border-secondary/50 lg:border-2 ":
            isSelected,
        },
      )}
    >
      <span className={cn("capitalize text-black/80")}>{dataSelected}</span>
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
        {!error && loading && <SearchLoading />}
        {!loading && error && <SearchError />}
      </ul>
      <span>
        <Arrow />
      </span>
    </div>
  );
};
