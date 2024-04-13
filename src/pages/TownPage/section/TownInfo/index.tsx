interface TownInfoProps {
  townData: Town | undefined;
}

export const TownInfo = ({ townData }: TownInfoProps) => {
  return (
    <div className="grid">
      <div>
        <h2 className="text-4xl font-medium capitalize tracking-widest ">
          {townData?.name}
        </h2>
        <div>
          <div className="mt-2">
            <p className="mt-1 text-xl">
              Area: {townData?.area} km<sup>2</sup>
            </p>
            <p className="mt-1 text-xl">
              Pupulation: {townData?.population} residents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
