import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { Line } from "@/components/ui";
import { postUser } from "@/utils/api/requests/users/user";

import { SubLineHeading } from "../SubLineHeading";
import { UserInfoField } from "../UserInfoField";

export const AccountInfo = () => {
  const jwtToken = Cookies.get("jwtToken");
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const intialUserInfo = async () => {
      try {
        if (!jwtToken) {
          throw new Error("Token not found");
        }
        const userResponse = await postUser(jwtToken);
        setUserData(userResponse.data);
        if (userResponse.status === 200) {
          console.log("s");
        }
      } catch {
        console.log("gg");
      }
    };
    intialUserInfo();
  }, [jwtToken]);
  console.log("userData ===", userData);
  return (
    <div>
      <SubLineHeading hasBtn className="mt-8">
        <h2 className="tracking-wide-20 drop-shadow-text text-lg uppercase">
          Account info
        </h2>
      </SubLineHeading>
      <UserInfoField className="mt-6" field="Name" value={userData?.name} />
      <UserInfoField
        className="mt-3"
        field="Email"
        value={userData?.email}
        linkLabel="Change email"
        linkHref="/change"
      />
      <Line className="mt-4" />
      <UserInfoField
        className="mt-3"
        field="Password"
        value="******"
        linkLabel="Change password"
        linkHref="/password"
      />
    </div>
  );
};
