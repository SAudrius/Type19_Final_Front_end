import { Arrow } from "@components/ui";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface SearchSelectProps {
  defaultValue: string;
  setData: React.Dispatch<React.SetStateAction<SearchData>>;
  classList?: string;
  dataCategories?: Category[];
  dataTowns?: Town[];
}

export const SearchSelect = ({
  classList,
  setData,
  dataCategories,
  dataTowns,
  defaultValue,
}: SearchSelectProps) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [dataSelected, setDataSelected] = useState(defaultValue);

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
      setData((prevState) => ({ ...prevState, town: id }));
      return;
    }
    setData((prevState) => ({ ...prevState, category: id }));
  };

  useEffect(() => {
    // fn on outside elment click remove dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsSelected(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          "max-h-50 absolute right-0 top-[46px] z-10 mx-4 w-60 flex-col rounded bg-white shadow-xl lg:mx-0",
          { hidden: !isSelected },
          { flex: isSelected },
        )}
      >
        {dataCategories &&
          dataCategories.map((category) => (
            <li
              key={`category-${category.id}`}
              className="cursor-pointer border-b border-black/10 px-4 py-2 capitalize lg:hover:bg-secondary"
              data-value={category.id}
              onClick={() =>
                handleOptionSelect(category.name, category.id, "category")
              }
            >
              {category.name}
            </li>
          ))}
        {dataTowns &&
          dataTowns.map((town) => (
            <li
              key={`town-${town.id}`}
              className="cursor-pointer border-b border-black/10 px-4 py-2 capitalize hover:bg-secondary"
              data-value={town.id}
              onClick={() => handleOptionSelect(town.name, town.id, "town")}
            >
              {town.name}
            </li>
          ))}
      </ul>
      <span>
        <Arrow />
      </span>
    </div>
  );
};
