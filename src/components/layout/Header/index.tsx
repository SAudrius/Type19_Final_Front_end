import { Link } from "react-router-dom";

import { AccountIcon } from "./AccountIcon";
import { CreateIcon } from "./CreateIcon";
import { Hamburger } from "./Hamburger";

export const Header = () => {
  return (
    <div className="lg:gap-30 container flex items-center justify-between py-4 md:gap-10 xl:gap-60">
      <p className="text-2xl -tracking-wide text-primary sm:text-3xl sm:tracking-normal md:min-w-56">
        <Link to="/">
          Classified Ads
          <span className="text-3xl text-secondary sm:text-4xl">4</span>u
        </Link>
      </p>
      <nav className="lg:w-full">
        <div className="flex items-center gap-6 lg:w-full lg:justify-between">
          <ul className="hidden items-center gap-6 md:flex">
            <li className="text-lg">
              <Link to="towns">Adds</Link>
            </li>
            <li className="text-lg">
              <Link to="towns">Towns</Link>
            </li>
            <li className="text-lg">
              <Link to="register">Register</Link>
            </li>
            <li className="text-lg">
              <Link to="login">Login</Link>
            </li>
          </ul>
          {/* TODO: if login display User & add trip. If not logged in then display login and register */}
          <ul className="flex items-center gap-3 sm:gap-6">
            <li className="text-lg">
              <Link to="user">
                <AccountIcon />
              </Link>
            </li>
            <li className="text-lg">
              <Link to="user">
                <CreateIcon />
              </Link>
            </li>
            <li className="md:hidden">
              <Hamburger />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
