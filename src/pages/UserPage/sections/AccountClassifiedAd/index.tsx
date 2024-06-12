import { GlobalError, GlobalLoading, ListCard } from "@components/ui";
import { deleteClassifiedAds } from "@utils/api";
import { updateClassifiedAdPublic } from "@utils/api/requests/classifiedAds/public";
import { getClassifiedAdsByUser } from "@utils/api/requests/classifiedAds/user/id";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

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

  const handlePublished = async (id: number) => {
    setLoading(true);
    if (!jwtToken) {
      setError(true);
      return;
    }
    const updateClassifiedAdResponse = await updateClassifiedAdPublic(
      jwtToken,
      id,
    );
    if (updateClassifiedAdResponse.status !== 200) {
      setError(true);
    }
    const updatedClassifiedAds = userClassifiedAds.map((classifiedAd) => {
      if (classifiedAd.id === id) {
        classifiedAd.is_published = !classifiedAd.is_published;
      }
      return classifiedAd;
    });
    setUserClassifiedAds(updatedClassifiedAds);
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
      <h2 className="text-3xl tracking-wide text-center ">
        Your classiefied ads
      </h2>
      <div className="grid w-full gap-4 mt-8 md:mt-8 md:grid-cols-2 md:gap-6 lg:mt-12 lg:grid-cols-3">
        {!loading &&
          userClassifiedAds &&
          userClassifiedAds.map((ClassifiedAd) => (
            <ListCard
              usersCards
              key={ClassifiedAd.id}
              classifiedAd={ClassifiedAd}
              handleDelete={handleDelete}
              handlePublished={handlePublished}
            />
          ))}
        {userClassifiedAds.length < 1 && !loading && (
          <p className="mt-16 text-xl text-center md:col-span-2 lg:col-span-3">
            You don't have any classified adds
          </p>
        )}
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
