import { Line } from "@components/ui";
import { logout } from "@lib/store/AuthReducer";
import { useAppDispatch } from "@lib/store/hooks";
import { cn } from "@lib/utils";
import React from "react";
import { useNavigate } from "react-router-dom";

interface SubLineHeadingProps {
  children: React.ReactNode;
  className?: string;
  hasBtn?: boolean;
}

export const SubLineHeading = ({
  children,
  className,
  hasBtn = false,
}: SubLineHeadingProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div
      className={cn("grid ", className, {
        "grid-cols-2": hasBtn,
      })}
    >
      {!hasBtn && children}
      {hasBtn && <div className="flex items-center">{children}</div>}
      {hasBtn && (
        <div className="flex items-center justify-end">
          <button
            className="px-4 py-1 border rounded-md border-primary text-primary"
            onClick={() => authLogout()}
          >
            LOG OUT
          </button>
        </div>
      )}
      <Line className={cn({ "col-span-2": hasBtn })}></Line>
    </div>
  );
};
