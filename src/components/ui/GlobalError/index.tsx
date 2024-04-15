import { cn } from "@/lib/utils";

interface GlobalError {
  message: string;
  className?: string;
  size?: "huge" | "default" | "small";
}

export const GlobalError = ({
  message,
  className,
  size = "default",
}: GlobalError) => {
  let customSize;

  if (size === "huge") {
    customSize = 5;
  }
  if (size === "default") {
    customSize = 3;
  }
  if (size === "small") {
    customSize = 1;
  }
  return (
    <p
      className={cn(
        `container mt-6 text-center text-${customSize}xl text-red-400`,
        className,
      )}
    >
      {message}
    </p>
  );
};
