import { AccountClassiefiedAds } from "./sections/AccountClassiefiedAds";
import { AccountInfo } from "./sections/AccountInfo";

export const UserPage = () => {
  return (
    <div className="container">
      <div>
        <AccountInfo />
        <AccountClassiefiedAds />
      </div>
    </div>
  );
};
