import { Line } from "@/components/ui";

interface ListCardProps {
  classifiedAd: ClassifiedAd;
}
export const ListCard = ({ classifiedAd }: ListCardProps) => {
  return (
    <div className="grid grid-rows-[240px_1fr_160px_100px] gap-4 rounded-lg border border-black/20 bg-white text-black ">
      <a
        className="block max-h-[240px]"
        href={`classified-ad/${classifiedAd.town_id}`}
      >
        <div className="relative h-[240px] w-full">
          <div className="h-full rounded-t-md bg-[url('https://picsum.photos/seed/picsum/860/320')] bg-center bg-no-repeat"></div>
        </div>
      </a>
      <a className="block px-6 " href={`classified-ad/${classifiedAd.town_id}`}>
        <h2 className="text-xl font-medium normal-case hover:text-secondary">
          {classifiedAd.title}
        </h2>
      </a>
      <p className="px-6 text-black/75">
        {classifiedAd.description.substring(0, 120)}
      </p>
      <div className=" max-h-[194px] w-full self-end">
        <Line className="" />
        <div className="mx-6 my-6 flex items-center justify-between ">
          <p className="rounded-md py-2 text-primary">{classifiedAd.price}$</p>
          <button className="cursor-pointer rounded-md bg-primary px-2 py-2 text-white hover:text-secondary">
            Like
          </button>
        </div>
      </div>
    </div>
  );
};
