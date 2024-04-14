import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { GlobalError, GlobalLoading, ListCard } from "@/components/ui";
import { deleteClassifiedAds } from "@/utils/api";
import { getClassifiedAdsByUser } from "@/utils/api/requests/classifiedAds/user/id";

export const AccountClassifiedAds = () => {
  const jwtToken = Cookies.get("jwtToken");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userClassifiedAds, setUserClassifiedAds] = useState<ClassifiedAd[]>(
    [],
  );
  const handleDelete = async (id: number) => {
    setLoading(true);
    if (!jwtToken) {
      setError(true);
      return;
    }
    const deleteClassifiedAdResponse = await deleteClassifiedAds(jwtToken, id);
    if (deleteClassifiedAdResponse.status !== 200) {
      setError(true);
    }
    const filteredClassifiedAd = userClassifiedAds.filter(
      (classifiedAd) => classifiedAd.id !== id,
    );
    setUserClassifiedAds(filteredClassifiedAd);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    const intialData = async () => {
      try {
        if (!jwtToken) {
          throw new Error("Token not found");
        }
        const ClassifiedAdsUserResponse =
          await getClassifiedAdsByUser(jwtToken);
        setUserClassifiedAds(ClassifiedAdsUserResponse.data);
      } catch {
        setError(true);
      }
      setLoading(false);
    };
    intialData();
  }, [jwtToken]);
  return (
    <div className="mt-8">
      <h2 className="text-center text-3xl tracking-wide ">
        Your classiefied ads
      </h2>
      <div className="mt-8 grid w-full gap-4 md:mt-8 md:grid-cols-2 md:gap-6 lg:mt-12 lg:grid-cols-3">
        {!loading &&
          userClassifiedAds &&
          userClassifiedAds.map((ClassifiedAd) => (
            <ListCard
              usersCards
              key={ClassifiedAd.id}
              classifiedAd={ClassifiedAd}
              handleDelete={handleDelete}
            />
          ))}
        {loading && !error && (
          <GlobalLoading
            className="mt-16 md:col-span-2 lg:col-span-3"
            size="huge"
          />
        )}
        {error && !loading && (
          <GlobalError
            className="mt-16 md:col-span-2 lg:col-span-3"
            message="Somethink went wrong"
          />
        )}
      </div>
    </div>
  );
};
