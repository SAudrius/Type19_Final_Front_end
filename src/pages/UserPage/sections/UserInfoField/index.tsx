import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "@/lib/store/AuthReducer";
import { useAppDispatch } from "@/lib/store/hooks";
import { cn } from "@/lib/utils";

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
  const handleSubmit = () => {
    console.log("hi");
  };

  return (
    <div className={cn("", className)}>
      <p className="tracking-wide-6 text-lg capitalize leading-6">
        <span className="tracking-wide-6 font-medium uppercase">{field}: </span>
        {value}
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
          onClick={handleSubmit}
          className="tracking-wide-12 mt-1 inline-block caption-top cursor-pointer underline"
        >
          Change info
        </button>
      )}
    </div>
  );
};
