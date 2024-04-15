import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getClassifiedAdsByTown } from "@/utils/api/requests/classifiedAds/town/id";
import { getTown } from "@/utils/api/requests/towns/town";

import { TownInfo } from "./section/TownInfo";
import { TownList } from "./section/TownList";

const TownPage = () => {
  const { id } = useParams();
  const [townData, setTownData] = useState<Town>();
  const [classiefiedAdsByTownData, setClassiefiedAdsByTownData] = useState<
    ClassifiedAd[]
  >([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  length;
  useEffect(() => {
    const getIntialData = async () => {
      setLoading(true);
      try {
        if (!id) {
          throw new Error("id not found");
        }
        const parsedId = parseInt(id);
        const classiefiedAdsByTownDataResponse =
          await getClassifiedAdsByTown(parsedId);
        const getTownResponse = await getTown(parsedId);
        setClassiefiedAdsByTownData(classiefiedAdsByTownDataResponse.data);
        setTownData(getTownResponse.data);
      } catch (error) {
        if (error) {
          setError(true);
        }
      }
      setLoading(false);
    };
    getIntialData();
  }, [id]);

  return (
    <>
      <div className="h-80 w-full bg-[url('/town-page/default-hero.jpg')] bg-center">
        <div className="container grid h-full items-center justify-center text-center text-white">
          <TownInfo townData={townData} />
        </div>
      </div>
      <div className="container">
        <TownList
          className="mt-16"
          classiefiedAdsByTownData={classiefiedAdsByTownData}
          error={error}
          loading={loading}
        />
      </div>
    </>
  );
};

export default TownPage;
