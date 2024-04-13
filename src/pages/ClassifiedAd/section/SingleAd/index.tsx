import { Line } from "@/components/ui";
import { cn } from "@/lib/utils";

interface classifiedAdProps {
  classifiedAd: ClassifiedAd;
}
export const SingleAd = ({ classifiedAd }: classifiedAdProps) => {
  console.log("classifiedAd.main_image_url ===", classifiedAd.main_image_url);
  const inlineStyle = {
    backgroundImage: `url('${classifiedAd.main_image_url}')`,
  };
  return (
    <div className="bg-slate-50 pb-16">
      <div
        style={inlineStyle}
        className={cn(
          `h-[400px] w-full bg-cover bg-no-repeat text-4xl bg-[url('${classifiedAd.main_image_url}')]`,
        )}
      ></div>
      <div className="container">
        <h2 className="mt-6 text-center text-2xl font-medium sm:text-3xl md:text-left">
          {classifiedAd.title}
        </h2>
        <div className="mt-6 rounded-md border border-black/30 bg-white p-4 shadow-xl md:p-8">
          <h3 className="text-2xl font-medium">Description:</h3>
          <Line className="mt-2" />
          <p className="mt-4 text-center text-black/75 md:text-left">
            {classifiedAd.description}
          </p>
        </div>
        <div className="mt-6 rounded-md border border-black/30 bg-white p-4 shadow-xl md:p-8">
          <h3 className="text-2xl font-medium">General info:</h3>
          <Line className="mt-2" />
          <div className="items mt-4 grid grid-cols-2 justify-between">
            <p className="text-xl uppercase">
              Type: <span className="font-bold">{classifiedAd.type}</span>
            </p>
            <p className="justify-self-end text-xl text-black/75 md:text-left">
              Price: <span className="font-bold">{classifiedAd.price}$</span>
            </p>
            <p className="col-span-2 mt-4 text-black/75 md:text-center">
              Phone number:{" "}
              <span className="font-bold">+{classifiedAd.phone}$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
