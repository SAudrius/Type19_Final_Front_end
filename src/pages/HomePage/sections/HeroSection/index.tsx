import { SearchBar } from "@/components/ui";
import { Categories } from "@/components/ui/Categories";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center bg-[url('/home-page/default-hero.png')] bg-center text-white">
      <div className="max-w-100 container">
        <h2 className="pt-12 text-center font-medium">
          Discover & Connect With Great Places Around The World
        </h2>
        <h1 className="mt-2 text-center text-4xl font-bold ">
          Let’s Find Classified Ads
        </h1>
        <SearchBar className="mt-4" />
        <Categories className="mt-8 pb-16" />
      </div>
    </div>
  );
};
