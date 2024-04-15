import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

import { SkeletonUserData } from "../../skeleton/SkeletonUserData";

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
      <p className="tracking-wide-6 text-lg lowercase leading-6">
        <span className="tracking-wide-6 font-medium uppercase">{field}: </span>
        {value}
        {!value && <SkeletonUserData />}
      </p>
      {linkLabel && linkHref && (
        <Link
          className="tracking-wide-12 mt-1 inline-block caption-top underline"
          to={linkHref}
        >
          {linkLabel}
        </Link>
      )}
      {infoValues && (
        <button
          type="button"
          className="tracking-wide-12 mt-1 inline-block caption-top cursor-pointer underline"
        >
          Change info
        </button>
      )}
    </div>
  );
};
