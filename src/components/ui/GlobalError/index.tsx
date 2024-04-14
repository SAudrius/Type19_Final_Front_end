import { cn } from "@/lib/utils";

interface GlobalError {
  message: string;
  className?: string;
}

export const GlobalError = ({ message, className }: GlobalError) => {
  return (
    <p className={cn("container mt-6 text-center text-red-400", className)}>
      {message}
    </p>
  );
};
