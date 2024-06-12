import { getCategories } from "@api/requests";
import { useAppDispatch } from "@lib/store/hooks";
import {
  setSearchCategoryId,
  setSearchCategoryName,
} from "@lib/store/SearchReducer";
import { cn } from "@lib/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CategoriesProps {
  className?: string;
}
export const Categories = ({ className }: CategoriesProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategoriesResponse = async () => {
      const categoriesResponse = await getCategories();
      setCategories(categoriesResponse.data);
    };
    getCategoriesResponse();
  }, []);
  const handleCategory = (id: number, name: string) => {
    dispatch(setSearchCategoryId(id));
    dispatch(setSearchCategoryName(name));
    navigate("/list");
  };
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        className,
      )}
    >
      <p className="text-center text-lg font-medium tracking-wide">
        Check our most popular
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategory(category.id, category.name)}
            className="items-center rounded-full border-2 px-4 py-2 capitalize hover:border-secondary hover:bg-secondary"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
