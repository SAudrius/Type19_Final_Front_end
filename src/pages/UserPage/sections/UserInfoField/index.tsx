import { cn } from "@lib/utils";
import { SkeletonUserData } from "@pages/UserPage/skeleton/SkeletonUserData";
import { Link } from "react-router-dom";

interface UserInfoFieldProps {
  field: string;
  value?: string;
  linkLabel?: string | null;
  linkHref?: string | null;
  className?: string;
  infoValues?: string;
}

export const UserInfoField = ({
  field,
  value,
  linkLabel = null,
  linkHref = null,
  infoValues,
  className,
}: UserInfoFieldProps) => {
  return (
    <div className={cn("", className)}>
      <p className="text-lg leading-6 lowercase tracking-wide-6">
        <span className="font-medium uppercase tracking-wide-6">{field}: </span>
        {value}
        {!value && <SkeletonUserData />}
      </p>
      {linkLabel && linkHref && (
        <Link
          className="inline-block mt-1 underline tracking-wide-12 caption-top"
          to={linkHref}
        >
          {linkLabel}
        </Link>
      )}
      {infoValues && (
        <button
          type="button"
          className="inline-block mt-1 underline cursor-pointer tracking-wide-12 caption-top"
        >
          Change info
        </button>
      )}
    </div>
  );
};
