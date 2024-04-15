import { AccountClassifiedAds } from "./sections/AccountClassifiedAd";
import { AccountInfo } from "./sections/AccountInfo";

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
