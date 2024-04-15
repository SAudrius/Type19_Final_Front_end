import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  closeHamburgerMenu,
  openHamburgerMenu,
  selectIsHamburgerMenuOpen,
  selectIsOverlayVisible,
} from "@/lib/store/UiReducer";

import { AccountIcon } from "./AccountIcon";
import { CreateIcon } from "./CreateIcon";
import { Hamburger } from "./Hamburger";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");

  const dispatch = useAppDispatch();
  const isHamburgerMenuOpen = useAppSelector(selectIsHamburgerMenuOpen);
  const isOverlayVisible = useAppSelector(selectIsOverlayVisible);
  const handleClose = () => {
    dispatch(closeHamburgerMenu());
  };

  const handleHamburger = () => {
    dispatch(openHamburgerMenu());
  };

  return (
    <>
      {isOverlayVisible && (
        <div
          className="absolute bottom-0 top-0 z-20 h-full w-full bg-black/15"
          onClick={handleClose}
        ></div>
      )}
      <div className="container flex items-center justify-between py-4  md:gap-10">
        <p className="text-2xl -tracking-wide text-primary sm:text-3xl sm:tracking-normal ">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </p>
        <nav className="lg:w-full">
          <div className="flex items-center gap-6 lg:w-full lg:justify-between">
            <ul className="hidden items-center gap-6 md:flex">
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
                      <CreateIcon />
                    </NavLink>
                  </li>
                </>
              )}
              <li className="md:hidden" onClick={handleHamburger}>
                <Hamburger />
              </li>
              {isHamburgerMenuOpen && <MobileMenu handleClose={handleClose} />}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
