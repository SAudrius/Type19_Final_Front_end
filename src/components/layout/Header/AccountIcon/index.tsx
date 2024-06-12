import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { postUser, UserResponse } from "@/utils/api/requests/users/user";

export const AccountIcon = () => {
  const jwtToken = Cookies.get("jwtToken");
  const [userData, setUserData] = useState<UserResponse>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    const initialData = async () => {
      setLoading(true);
      try {
        if (!jwtToken) {
          return;
        }
        const userDataResponse = await postUser(jwtToken);
        setUserData(userDataResponse.data);
      } catch {
        setError(true);
      }
      setLoading(false);
    };
    initialData();
  }, [jwtToken]);

  return (
    <div>
      {userData?.avatar_url && !error && !loading && (
        <img
          className="rounded-full"
          src={userData.avatar_url}
          alt="User Avatar"
          style={{ width: "41px", height: "41px" }}
        />
      )}
      {!userData?.avatar_url && (
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5229 40.2778C9.7534 40.2778 1.02295 31.5474 1.02295 20.7778C1.02295 10.0083 9.7534 1.27783 20.5229 1.27783C31.2925 1.27783 40.0229 10.0083 40.0229 20.7778C40.0229 31.5474 31.2925 40.2778 20.5229 40.2778Z"
            stroke="#707070"
          />
          <g clipPath="url(#clip0_2_2319)">
            <path
              d="M24.8265 17.5058C24.8265 15.1712 22.8991 13.2778 20.5226 13.2778C18.1461 13.2778 16.2188 15.1712 16.2188 17.5058C16.2188 19.8403 18.1461 21.7337 20.5226 21.7337C22.8991 21.7337 24.8265 19.8403 24.8265 17.5058ZM17.3415 17.5058C17.3415 15.7778 18.7637 14.3808 20.5226 14.3808C22.2816 14.3808 23.7037 15.7778 23.7037 17.5058C23.7037 19.2337 22.2816 20.6308 20.5226 20.6308C18.7637 20.6308 17.3415 19.2337 17.3415 17.5058Z"
              fill="#646464"
            />
            <path
              d="M13.3183 28.2041C13.4119 28.2592 13.5054 28.2776 13.599 28.2776C13.7861 28.2776 13.992 28.1857 14.0855 28.0019C15.3954 25.7225 17.8655 24.307 20.5226 24.307C23.1798 24.307 25.6498 25.7225 26.9784 28.0019C27.1281 28.2592 27.4836 28.3511 27.7456 28.2041C28.0076 28.057 28.1012 27.7077 27.9515 27.4504C26.4357 24.8401 23.5914 23.2041 20.5226 23.2041C17.4538 23.2041 14.6095 24.8401 13.0938 27.4504C12.9441 27.7077 13.0376 28.057 13.3183 28.2041Z"
              fill="#646464"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_2319">
              <rect
                width="15"
                height="15"
                fill="white"
                transform="translate(13.0229 13.2778)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};
