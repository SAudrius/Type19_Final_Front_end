import { NavLink } from "react-router-dom";

import { AccountIcon } from "../Header/AccountIcon";
import { CreateIcon } from "../Header/CreateIcon";
import { Logo } from "../Header/Logo";

export const Footer = () => {
  const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");
  return (
    <div className="mt-32 bg-secondary pb-12 pt-8 md:pb-16 md:pt-12">
      <div className="container grid w-full grid-cols-5 justify-start gap-4 md:grid-cols-2">
        <NavLink className="col-span-1 md:col-span-1" to="/">
          <div className="text-2xl text-primary">
            <Logo />
          </div>
        </NavLink>
        <nav className="col-span-4 md:col-span-1">
          <div className="flex items-center gap-6 md:w-full md:justify-end">
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
        <p className="col-span-5 mt-8 md:col-span-2">
          All right reserver by{" "}
          <span className="font-bold">Audrius@sabalys.com</span>
        </p>
      </div>
    </div>
  );
};
