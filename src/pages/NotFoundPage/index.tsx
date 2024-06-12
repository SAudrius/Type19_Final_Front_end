import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center ">
      <div>
        <p className="text-4xl font-thin uppercase tracking-widest">
          Page not found
        </p>

        <Link
          className="mt-4 block text-center text-lg underline underline-offset-2"
          to="/"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};
