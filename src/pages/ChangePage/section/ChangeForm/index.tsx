import { AxiosError } from "axios";
import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { GlobalError, GlobalLoading } from "@/components/ui";
import { CustomFormField } from "@/components/ui/CustomFormField";
import { login } from "@/lib/store/AuthReducer";
import { useAppDispatch } from "@/lib/store/hooks";
import { UpdateUser, updateUser } from "@/utils/api/requests/users/user";

export const ChangeForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const jwtToken = Cookies.get("jwtToken");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{ email: "", name: "", password: "", avatarUrl: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        name: Yup.string().required("Name is required"),
        avatarUrl: Yup.string(),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Password is required"),
      })}
      onSubmit={async (values) => {
        setError("");
        setLoading(true);

        const submitValues: UpdateUser = {
          email: values.email,
          name: values.name,
          avatarUrl: values.avatarUrl,
          password: values.password,
        };
        try {
          if (!jwtToken) {
            throw new Error("Somethink went wrong");
          }
          console.log("values ===", values);
          const updateResponse = await updateUser(jwtToken, submitValues);
          console.log("updateResponse.status  ===", updateResponse.status);
          if (updateResponse.status === 401) {
            console.log("hi");
            setError("Password is invalid");
            console.log("throw error");
            return;
          }
          if (updateResponse.status === 200) {
            dispatch(login());
            navigate("/user");
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any | AxiosError) {
          console.log("@err", err);
          console.log("err.response.status ===", err.response.status);
          if (err.response && err.response.status === 401) {
            setError("Password is wrong");
          } else {
            setError("Something went wrong");
          }
        }
        setLoading(false);
      }}
    >
      {/* // eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {() => (
        <Form className="mt-8 grid w-full max-w-[600px] gap-4">
          <CustomFormField
            name="email"
            type="email"
            placeholder="Your new email"
          />
          <CustomFormField
            name="name"
            type="text"
            placeholder="Your new name"
          />
          <CustomFormField
            name="avatarUrl"
            type="text"
            placeholder="Your new avatar url"
          />
          <CustomFormField
            name="password"
            type="password"
            placeholder="Your old password"
          />

          <button
            className="block h-[42px] w-full rounded-md bg-secondary text-white hover:bg-primary"
            type="submit"
          >
            Submit
          </button>
          {!error && loading && (
            <GlobalLoading className="flex justify-center" />
          )}
          {error && !loading && (
            <GlobalError className="flex justify-center" message={error} />
          )}
        </Form>
      )}
    </Formik>
  );
};
