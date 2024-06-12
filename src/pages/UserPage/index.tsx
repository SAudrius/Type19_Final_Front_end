import { AccountClassifiedAds } from "@pages/UserPage/sections/AccountClassifiedAd";
import { AccountInfo } from "@pages/UserPage/sections/AccountInfo";

export const UserPage = () => {
  return (
    <div className="container">
      <div className="min-h-[72vh]">
        <AccountInfo />
        <AccountClassifiedAds />
      </div>
    </div>
  );
};
