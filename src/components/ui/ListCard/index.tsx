import { Link } from "react-router-dom";

import { Line } from "@/components/ui";

interface ListCardProps {
  classifiedAd: ClassifiedAd;
  usersCards?: boolean;
  handleDelete?: (id: number) => void;
  handlePublished?: (id: number) => void;
}
export const ListCard = ({
  classifiedAd,
  usersCards,
  handleDelete,
  handlePublished,
}: ListCardProps) => {
  const inlineStyle = {
    backgroundImage: `url('${classifiedAd.image_main}')`,
  };
  return (
    <div className="grid grid-rows-[240px_1fr_160px_100px] gap-4 rounded-lg border border-black/20 bg-white text-black ">
      <Link
        className="block max-h-[240px]"
        to={`/classified-ad/${classifiedAd.id}`}
      >
        <div className="relative h-[240px] w-full">
          <div
            style={inlineStyle}
            className="aspect-auto h-full rounded-t-md bg-center bg-no-repeat"
          ></div>
        </div>
      </Link>
      <Link className="block px-6 " to={`/classified-ad/${classifiedAd.id}`}>
        <h2 className="text-xl font-medium normal-case hover:text-secondary">
          {classifiedAd.title}
        </h2>
      </Link>
      <p className="px-6 text-black/75">
        {classifiedAd.description.substring(0, 120)}
      </p>
      <div className=" max-h-[194px] w-full self-end">
        <Line className="" />
        <div className="mx-6 my-6 flex items-center justify-between ">
          <p className="rounded-md py-2 text-primary">{classifiedAd.price}$</p>
          <div>
            {usersCards && handlePublished && (
              <button
                onClick={() => handlePublished(classifiedAd.id)}
                className="cursor-pointer rounded-md border bg-primary px-2 py-2 text-white hover:bg-secondary hover:font-bold hover:text-white"
              >
                {classifiedAd.is_published ? "Public" : "Publish"}
              </button>
            )}
            {usersCards && handleDelete && (
              <button
                onClick={() => handleDelete(classifiedAd.id)}
                className="cursor-pointer rounded-md border bg-primary px-2 py-2 text-white hover:border-red-500 hover:bg-white hover:font-bold hover:text-red-500"
              >
                DELETE
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
