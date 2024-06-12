import { LoginForm } from "@pages/LoginPage/sections/LoginForm";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="container flex h-[80vh] flex-col items-center justify-center">
      <h2 className="text-center text-4xl">Login</h2>
      <div className="flex w-full items-center justify-center ">
        <LoginForm />
      </div>
      <Link to="/register">
        <p className="mt-4 text-black/70">Need an account?</p>
      </Link>
    </div>
  );
};
