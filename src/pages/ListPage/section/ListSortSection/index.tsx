import { SearchSelect } from "@/components/ui";

interface ListSortSectionProps {
  classifiedAdsCount: CountResult[];
}
export const ListSortSection = ({
  classifiedAdsCount,
}: ListSortSectionProps) => {
  const sortOptions: SortOptions[] = [
    { id: 0, name: "Name (Ascending)" },
    { id: 1, name: "Name (Descending)" },
    // Add more options as needed
  ];
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-xl border border-black/30 px-6 text-black ">
      <p>
        Found results{" "}
        {classifiedAdsCount && classifiedAdsCount.map((obj) => obj.count)}
        {classifiedAdsCount.length < 1 && "0"}
      </p>
      <SearchSelect defaultValue="Categories" sortOptions={sortOptions} />
    </div>
  );
};
