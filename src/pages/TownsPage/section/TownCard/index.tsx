import { cn } from "@lib/utils";
import { Link } from "react-router-dom";

interface TownCardProps {
  townData: Town;
  className?: string;
}

export const TownCard = ({ townData, className }: TownCardProps) => {
  return (
    <Link key={townData.id} to={`/town/${townData.id}`}>
      <div
        className={cn(
          "group flex h-[200px] w-full flex-col items-center justify-center rounded-xl border border-black/10 bg-white text-black hover:shadow-2xl",
          className,
        )}
      >
        {/* TODO: Calc how many ads is available in that town */}
        {/* <p className="text-black/30">(2)</p> */}
        <h2 className="uppercase group-hover:text-secondary">
          {townData.name}
        </h2>
        <p className="mt-4">
          Town area: {townData.area}
          km<sup>2</sup>
        </p>
        <p className="mt-2">Population: {townData.population}, residents</p>
      </div>
    </Link>
  );
};
