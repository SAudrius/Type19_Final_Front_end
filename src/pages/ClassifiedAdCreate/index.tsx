import { useEffect, useState } from "react";

import { getCategories, getTowns } from "@/utils/api";

import { CreateForm } from "./section/CreateForm";

export const ClassifiedAdCreate = () => {
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);
  const [townsData, setTownsData] = useState<Town[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getIntialData = async () => {
      setLoading(true);
      try {
        const categoireshResponse = await getCategories();
        const townshResponse = await getTowns();
        setCategoriesData(categoireshResponse.data);
        setTownsData(townshResponse.data);
      } catch {
        setError(true);
      }
      setLoading(false);
    };
    getIntialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container my-12 flex flex-col items-center justify-center md:my-16 lg:my-20">
      <h2 className="text-center text-3xl lg:text-4xl">Create classified ad</h2>
      <div className="flex w-full items-center justify-center ">
        <CreateForm townsData={townsData} categoriesData={categoriesData} />
      </div>
    </div>
  );
};
