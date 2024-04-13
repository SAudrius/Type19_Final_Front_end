import React, { RefObject, useEffect } from "react";

export const useClickRemoveClickOutside = (
  htmlRef: RefObject<HTMLDivElement>,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (htmlRef.current && !htmlRef.current.contains(event.target as Node)) {
        setState(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
};
