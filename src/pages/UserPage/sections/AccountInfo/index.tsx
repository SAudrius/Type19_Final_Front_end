import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { GlobalError, Line } from "@/components/ui";
import { postUser } from "@/utils/api/requests/users/user";

import { SkeletonUserData } from "../../skeleton/SkeletonUserData";
import { SubLineHeading } from "../SubLineHeading";
import { UserInfoField } from "../UserInfoField";

export const AccountInfo = () => {
  const jwtToken = Cookies.get("jwtToken");
  const [userData, setUserData] = useState<User>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    const intialUserInfo = async () => {
      try {
        if (!jwtToken) {
          throw new Error("Token not found");
        }
        const userResponse = await postUser(jwtToken);
        setUserData(userResponse.data);
        if (userResponse.status === 200) {
          return;
        }
      } catch {
        setError(true);
      }
    };
    setLoading(false);
    intialUserInfo();
  }, [jwtToken]);

  return (
    <div>
      <SubLineHeading hasBtn className="mt-8">
        <h2 className="tracking-wide-20 drop-shadow-text text-lg uppercase">
          Account info
        </h2>
      </SubLineHeading>
      {!loading && !error && (
        <>
          <UserInfoField className="mt-6" field="Name" value={userData?.name} />
          <UserInfoField
            className="mt-3"
            field="Email"
            value={userData?.email}
            linkLabel="Change info"
            linkHref="/change"
          />
        </>
      )}
      {error && !loading && (
        <GlobalError
          className="flex h-[10vh] items-center justify-center text-center"
          message="Something went wrong"
        />
      )}
      <Line className="mt-4" />
    </div>
  );
};
