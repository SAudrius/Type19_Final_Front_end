import { cn } from "@/lib/utils";
import { ListCard } from "@/pages/ListPage/section/ListCard";

interface TownListProps {
  classiefiedAdsByTownData: ClassifiedAd[];
  loading: boolean;
  error: boolean;
  className: string;
}

export const TownList = ({
  classiefiedAdsByTownData,
  loading,
  error,
  className,
}: TownListProps) => {
  return (
    <div
      className={cn(
        "grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3",
        className,
      )}
    >
      {classiefiedAdsByTownData.length < 1 && !loading && (
        <div className="col-span-2 text-center text-2xl text-black lg:col-span-3">
          List is empty no data found
        </div>
      )}
      {!error && loading && (
        <div className="col-span-2 text-center text-2xl text-black lg:col-span-3">
          Loading...
        </div>
      )}
      {classiefiedAdsByTownData &&
        !loading &&
        !error &&
        classiefiedAdsByTownData.map((town) => (
          <ListCard classifiedAd={town} key={town.id} />
        ))}
    </div>
  );
};
