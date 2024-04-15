import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { CustomFormField } from "@/components/ui/CustomFormField";
import { login } from "@/lib/store/AuthReducer";
import { useAppDispatch } from "@/lib/store/hooks";
import { postLogin, PostLoginBody } from "@/utils/api/requests/auth/login";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Password is required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);

        const submitValues: PostLoginBody = {
          password: values.password,
          email: values.email,
        };
        try {
          const registerResponse = await postLogin(submitValues);
          const jwtToken = registerResponse.data.token;
          const jwtTokenRefresh = registerResponse.data.refreshToken;

          document.cookie = `jwtToken=${jwtToken}; secure;`;
          document.cookie = `jwtTokenRefresh=${jwtTokenRefresh}; secure;`;

          dispatch(login());
          navigate("/user");
        } catch (err) {
          console.log("err", err);
        }
        setSubmitting(false);
      }}
    >
      {/* // eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {() => (
        <Form className="mt-8 grid w-full max-w-[600px] gap-4">
          <CustomFormField name="email" type="email" placeholder="Your email" />
          <CustomFormField
            name="password"
            type="password"
            placeholder="Your password"
          />

          <button
            className="block h-[42px] w-full rounded-md bg-secondary text-white hover:bg-primary"
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
