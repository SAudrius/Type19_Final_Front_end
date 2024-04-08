import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { getTowns } from "@/utils/api/requests/towns";

interface TownsProps {
  className?: string;
}

export const Towns = ({ className }: TownsProps) => {
  const [towns, setTowns] = useState<Town[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getTownsResponse = async () => {
      try {
        const townsRespononse = await getTowns();
        setTowns(townsRespononse.data);
      } catch (err) {
        setIsError(true);
      }
    };
    getTownsResponse();
    setIsLoading(false);
  }, []);

  return (
    <div className="container">
      <div className="relative w-full">
        <div className="absolute top-[-32px] flex w-full flex-col gap-4 md:grid  md:grid-cols-2 lg:grid-cols-3">
          {towns.map((town) => (
            <Link key={town.id} to={`/town/${town.id}`}>
              <div
                className={cn(
                  "group flex h-[200px] w-full flex-col items-center justify-center rounded-xl border border-black/10 bg-white text-black hover:shadow-2xl",
                  className,
                )}
              >
                {/* TODO: Calc how many ads is available in that town */}
                {/* <p className="text-black/30">(2)</p> */}
                <h2 className="uppercase group-hover:text-secondary">
                  {town.name}
                </h2>
                <p className="mt-4">
                  Town area: {town.area}
                  km<sup>2</sup>
                </p>
                <p className="mt-2">Population: {town.population}, residents</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
