import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getClassifiedAd } from "@/utils/api";

import { SingleAd } from "./section/SingleAd";

export const ClassifiedAd = () => {
  const { id } = useParams();
  const [classifiedAd, setClassifiedAd] = useState<ClassifiedAd>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log("searcParams ===", id);

  useEffect(() => {
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
      {loading && !error && <p className="container text-center">loading...</p>}
      {error && !loading && (
        <p className="container mt-6 text-center text-red-400">
          Classified Ad is not found
        </p>
      )}
    </div>
  );
};
