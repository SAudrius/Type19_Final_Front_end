import { HeroSection } from "@pages/HomePage/sections/HeroSection";

import { TownSection } from "../TownsPage/section/TownSection";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TownSection className="absolute top-[-32px] mt-0 flex w-full" />
    </>
  );
};
