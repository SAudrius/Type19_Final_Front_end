import { AccountClassifiedAds } from "./sections/AccountClassifiedAd";
import { AccountInfo } from "./sections/AccountInfo";

export const UserPage = () => {
  return (
    <div className="container">
      <div>
        <AccountInfo />
        <AccountClassifiedAds />
      </div>
    </div>
  );
};
