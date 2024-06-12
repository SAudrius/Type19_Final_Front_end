export const ListPageSkeleton = () => {
  return (
    <>
      <div className="grid w-full ">
        <div className="h-160 rounded-md bg-slate-100 shadow-md "></div>
      </div>
      <div className="h-120 grid w-full gap-6 lg:grid-cols-2">
        <div className="h-16 rounded-md bg-slate-100 shadow-md lg:col-span-2"></div>
        <div className="h-[484px] rounded-md bg-slate-100 shadow-md"></div>
        <div className="h-[484px] rounded-md bg-slate-100 shadow-md "></div>
        <div className="h-[484px] rounded-md bg-slate-100 shadow-md "></div>
        <div className="h-[484px] rounded-md bg-slate-100 shadow-md "></div>
        <div className="h-[484px] rounded-md bg-slate-100 shadow-md "></div>
      </div>
    </>
  );
};
