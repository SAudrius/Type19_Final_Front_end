import { Link } from "react-router-dom";

import { RegisterForm } from "./section/RegisterForm";

export const RegisterPage = () => {
  return (
    <div className="container flex h-[80vh] flex-col items-center justify-center">
      <h2 className="text-center text-4xl">Register</h2>
      <div className="flex w-full items-center justify-center ">
        <RegisterForm />
      </div>
      <Link to="/login">
        <p className="mt-4 text-black/70">Have an account?</p>
      </Link>
    </div>
  );
};
