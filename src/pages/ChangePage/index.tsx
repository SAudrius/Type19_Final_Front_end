import { ChangeForm } from "./section/ChangeForm";

export const ChangPage = () => {
  return (
    <div className="container flex h-[80vh] flex-col items-center justify-center">
      <h2 className="text-center text-4xl">Change Info</h2>
      <div className="flex w-full items-center justify-center ">
        <ChangeForm />
      </div>
    </div>
  );
};
