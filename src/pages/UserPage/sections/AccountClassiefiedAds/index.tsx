import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { getClassifiedAdsByUser } from "@/utils/api/requests/classifiedAds/user/id";

export const AccountClassiefiedAds = () => {
  const jwtToken = Cookies.get("jwtToken");
  const [userClassiefiedAds, setUserClassiefiedAds] = useState<ClassifiedAd[]>(
    [],
  );
  useEffect(() => {
    const intialData = async () => {
      try {
        if (!jwtToken) {
          throw new Error("Token not found");
        }
        const classiefiedAdsUserResponse =
          await getClassifiedAdsByUser(jwtToken);
        console.log(
          "classiefiedAdsUserResponse ===",
          classiefiedAdsUserResponse.data,
        );
        setUserClassiefiedAds(classiefiedAdsUserResponse.data);
      } catch {
        console.log("err");
      }
    };
    intialData();
  }, [jwtToken]);
  return (
    <div className="mt-8">
      <h2 className="text-center text-xl uppercase">Your classiefied ads</h2>
    </div>
  );
};
