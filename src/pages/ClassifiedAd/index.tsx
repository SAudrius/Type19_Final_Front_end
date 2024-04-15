import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GlobalError, GlobalLoading } from "@/components/ui";
import { getClassifiedAd } from "@/utils/api";

import { SingleAd } from "./section/SingleAd";

export const ClassifiedAd = () => {
  const { id } = useParams();
  const [classifiedAd, setClassifiedAd] = useState<ClassifiedAd>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getInitialData = async () => {
      try {
        setLoading(true);

        if (!id) {
          throw new Error("Id not found");
        }
        const parsedId = parseInt(id);
        const classiefiedAdResponse = await getClassifiedAd(parsedId);
        setClassifiedAd(classiefiedAdResponse.data);
      } catch {
        console.log("err");
        setError(true);
      }
      setLoading(false);
    };
    getInitialData();
  }, [id]);
  console.log("classifiedAd ===", classifiedAd);
  return (
    <div className="">
      {classifiedAd && !loading && !error && (
        <SingleAd classifiedAd={classifiedAd} />
      )}
      {loading && !error && (
        <GlobalLoading size="huge" className="flex h-[80vh] items-center" />
      )}
      {error && !loading && (
        <GlobalError
          className="flex h-[80vh] items-center justify-center text-center"
          message="Something went wrong"
        />
      )}
    </div>
  );
};
