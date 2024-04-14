import ClipLoader from "react-spinners/ClipLoader";

export const GlobalLoading = () => {
  return (
    <div className="flex justify-center rounded-md bg-green-50 px-4 py-2">
      <ClipLoader color="#F39316" />
    </div>
  );
};
