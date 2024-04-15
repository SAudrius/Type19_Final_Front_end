import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { GlobalError, GlobalLoading } from "@/components/ui";
import { CustomFormField } from "@/components/ui/CustomFormField";
import { login, setIsLoggedIn } from "@/lib/store/AuthReducer";
import { useAppDispatch } from "@/lib/store/hooks";
import {
  postRegister,
  PostRegisterBody,
} from "@/utils/api/requests/auth/register";

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        password: "",
        repeatPassword: "",
        avatarUrl: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        name: Yup.string().required("Name is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .max(20, "Must be 20 characters or less")
          .required("Password is required"),
        repeatPassword: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Password is required")
          .oneOf([Yup.ref("password")], "Passwords must match"),
        avatarUrl: Yup.string(),
      })}
      onSubmit={async (values) => {
        setLoading(true);

        const submitValues: PostRegisterBody = {
          name: values.name,
          password: values.password,
          email: values.email,
          avatar_url: values.avatarUrl,
        };
        try {
          const registerResponse = await postRegister(submitValues);
          const jwtToken = registerResponse.data.token;
          const jwtTokenRefresh = registerResponse.data.refreshToken;

          document.cookie = `jwtToken=${jwtToken}; secure;`;
          document.cookie = `jwtTokenRefresh=${jwtTokenRefresh}; secure;`;
          dispatch(setIsLoggedIn(true));
          dispatch(login());
          navigate("/user");
        } catch {
          setError(true);
        }
        setLoading(false);
      }}
    >
      {/* // eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {() => (
        <Form className="mt-8 grid w-full max-w-[600px] gap-4">
          <CustomFormField name="email" type="email" placeholder="Your email" />
          <CustomFormField
            name="name"
            type="text"
            placeholder="Your real name"
          />
          <CustomFormField
            name="password"
            type="password"
            placeholder="Your password"
          />
          <CustomFormField
            name="repeatPassword"
            type="password"
            placeholder="Your repeat password"
          />
          <CustomFormField
            name="avatarUrl"
            type="text"
            placeholder="Your avatar url"
          />

          <button
            className="block h-[42px] w-full rounded-md bg-secondary text-white hover:bg-primary"
            type="submit"
          >
            Submit
          </button>
          {loading && !error && (
            <GlobalLoading size="small" className="flex items-center" />
          )}
          {error && !loading && (
            <GlobalError
              className="flex items-center justify-center text-center"
              message="Something went wrong"
            />
          )}
        </Form>
      )}
    </Formik>
  );
};
