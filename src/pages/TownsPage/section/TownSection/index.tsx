import { GlobalError, GlobalLoading } from "@components/ui";
import { cn } from "@lib/utils";
import { getTowns } from "@utils/api";
import { useEffect, useState } from "react";

import { TownCard } from "../TownCard";

interface TownSectionProps {
  className?: string;
}

export const TownSection = ({ className }: TownSectionProps) => {
  const [townsData, setTownsData] = useState<Town[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getTownsData = async () => {
      try {
        const townsResponse = await getTowns();
        setTownsData(townsResponse.data);
      } catch {
        setError(true);
      }
      setLoading(false);
    };
    getTownsData();
  }, []);
  console.log("townsData ===", townsData);
  return (
    <div className="container">
      <div className="relative w-full">
        <div
          className={cn(
            "mt-8 flex flex-col gap-4 md:grid md:grid-cols-2 lg:mt-16 lg:grid-cols-3",
            className,
          )}
        >
          {!loading &&
            !error &&
            townsData.map((town) => <TownCard key={town.id} townData={town} />)}
        </div>
        {loading && !error && (
          <GlobalLoading size="huge" className="flex h-[60vh] items-center" />
        )}
        {error && !loading && (
          <GlobalError
            className="flex h-[60vh] items-center justify-center text-center"
            message="Something went wrong"
          />
        )}
      </div>
    </div>
  );
};
