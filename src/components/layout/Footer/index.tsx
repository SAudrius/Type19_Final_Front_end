import { NavLink } from "react-router-dom";

import { AccountIcon } from "../Header/AccountIcon";
import { CreateIcon } from "../Header/CreateIcon";
import { Logo } from "../Header/Logo";

export const Footer = () => {
  const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");
  return (
    <div className="mt-32 bg-secondary pb-20 pt-8 md:pb-24 md:pt-12">
      <div className="container flex justify-start gap-4">
        <NavLink to="/">
          <div className="text-2xl text-primary">
            <Logo />
          </div>
        </NavLink>
        <nav className="lg:w-full">
          <div className="flex items-center gap-6 md:w-full md:justify-between">
            <ul className="flex items-center gap-6 text-white">
              <li className="text-lg">
                <NavLink to="/towns">Towns</NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/list">List</NavLink>
              </li>
              {!isLoggedInLocalStorage && (
                <>
                  <li className="text-lg">
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li className="text-lg">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
            <ul className="flex items-center gap-3 sm:gap-6">
              {isLoggedInLocalStorage && (
                <>
                  <li className="text-lg">
                    <NavLink to="/user">
                      <AccountIcon />
                    </NavLink>
                  </li>
                  <li className="text-lg">
                    <NavLink to="/classified/create">
                      <CreateIcon footer />
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
