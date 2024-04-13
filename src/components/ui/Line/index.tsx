import { cn } from "@/lib/utils";

interface LineProps {
  className?: string;
}

export const Line = ({ className }: LineProps) => {
  return <div className={cn("h-[1px] w-full bg-black/20", className)}></div>;
};
