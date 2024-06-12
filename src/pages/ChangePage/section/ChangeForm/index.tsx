import { UpdateUser, updateUser } from "@api/requests";
import { GlobalError, GlobalLoading } from "@components/ui";
import { CustomFormField } from "@components/ui/CustomFormField";
import { login } from "@lib/store/AuthReducer";
import { useAppDispatch } from "@lib/store/hooks";
import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

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
          const updateResponse = await updateUser(jwtToken, submitValues);
          if (updateResponse.status === 401) {
            setError("Password is invalid");
            return;
          }
          if (updateResponse.status === 200) {
            dispatch(login());
            navigate("/user");
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
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
