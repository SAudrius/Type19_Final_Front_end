import { cn } from "@lib/utils";
import ClipLoader from "react-spinners/ClipLoader";

interface GlobalLoadingProps {
  className?: string;
  size?: "huge" | "default" | "small";
}
export const GlobalLoading = ({
  className,
  size = "default",
}: GlobalLoadingProps) => {
  let customSize;
  if (size === "huge") {
    customSize = 100;
  }
  if (size === "default") {
    customSize = 50;
  }
  if (size === "small") {
    customSize = 30;
  }
  return (
    <div className={cn("flex justify-center rounded-md px-4 py-2", className)}>
      <ClipLoader size={customSize} color="#F39316" />
    </div>
  );
};
