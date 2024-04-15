import { HeroSection } from "@pages/HomePage/sections/HeroSection";

import { TownSection } from "../TownsPage/section/TownSection";

export const HomePage = () => {
  return (
    <div className="min-h-full lg:min-h-[82vh]">
      <HeroSection />
      <TownSection
        heading={false}
        className="top-[-32px]  mt-0 flex w-full lg:absolute"
      />
    </div>
  );
};
