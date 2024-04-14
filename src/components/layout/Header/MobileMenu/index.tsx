import { NavLink } from "react-router-dom";

import { Line } from "@/components/ui";

import { AccountIcon } from "../AccountIcon";
import { CreateIcon } from "../CreateIcon";

interface MobileMenuProps {
  handleClose: () => void;
}

export const MobileMenu = ({ handleClose }: MobileMenuProps) => {
  const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");

  const handleNavLinkClick = () => {
    handleClose();
  };

  return (
    <div className="absolute right-0 top-0 z-30 flex h-screen w-[300px] flex-col bg-slate-100">
      <div className="flex items-center justify-between px-4 pt-4">
        <p className="text-2xl">Menu</p>
        <button className="bg-orange-300" onClick={handleClose}>
          close
        </button>
      </div>
      <Line className="my-4" />
      <nav className="px-4 pb-4 lg:w-full">
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-2">
            <li className="text-lg">
              <NavLink onClick={handleNavLinkClick} to="/list">
                Classified Ads
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink onClick={handleNavLinkClick} to="/towns">
                Towns
              </NavLink>
            </li>
            {!isLoggedInLocalStorage && (
              <>
                <li className="text-lg">
                  <NavLink onClick={handleNavLinkClick} to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="text-lg">
                  <NavLink onClick={handleNavLinkClick} to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="flex items-center justify-between gap-3 sm:gap-6">
            {isLoggedInLocalStorage && (
              <>
                <li className="text-lg">
                  <NavLink onClick={handleNavLinkClick} to="/user">
                    <AccountIcon />
                  </NavLink>
                </li>
                <li className="text-lg">
                  <NavLink onClick={handleNavLinkClick} to="/classified/create">
                    <CreateIcon />
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
