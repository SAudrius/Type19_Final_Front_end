import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { getCategories } from "@/utils/api/requests/categories";

interface CategoriesProps {
  className?: string;
}
export const Categories = ({ className }: CategoriesProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategoriesResponse = async () => {
      const categoriesResponse = await getCategories();
      setCategories(categoriesResponse.data);
    };
    getCategoriesResponse();
  }, []);
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
          <Link
            key={category.id}
            to={`/list?search=category=${encodeURIComponent(category.name)}`}
            className="items-center rounded-full border-2 px-4 py-2 capitalize hover:border-secondary hover:bg-secondary"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
