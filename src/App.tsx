import Cookies from "js-cookie";
import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { Header } from "@/components/layout/Header/index";
import {
  ClassifiedAd,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  TownsPage,
  UserPage,
} from "@/pages";

import { Footer } from "./components/layout/Footer";
import { logout } from "./lib/store/AuthReducer";
import { useAppDispatch, useAppSelector } from "./lib/store/hooks";
import { selectIsOverlayVisible } from "./lib/store/UiReducer";
import { cn } from "./lib/utils";
import { ChangPage } from "./pages/ChangePage";
import { ClassifiedAdCreate } from "./pages/ClassifiedAdCreate";
import { ListPage } from "./pages/ListPage";
import TownPage from "./pages/TownPage";
import { PostRefresh } from "./utils/api/requests/auth/refresh";

export const App = () => {
  const navigate = useNavigate();
  const isOverlayVisible = useAppSelector(selectIsOverlayVisible);

  const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn");
  const refreshToken = Cookies.get("jwtTokenRefresh");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const refreshAuthToken = async () => {
      try {
        if (!refreshToken) {
          dispatch(logout());
          return;
        }
        const refreshTokenResponse = await PostRefresh(refreshToken);
        if (refreshTokenResponse.status === 204) {
          return;
        }
        if (refreshTokenResponse.status !== 200) {
          throw new Error("Invalid refresh token");
        }
        const newToken = refreshTokenResponse.data.token;
        Cookies.set("jwtToken", newToken);
      } catch (error) {
        dispatch(logout());
        navigate("/");
      }
    };
    refreshAuthToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedInLocalStorage, refreshToken]);

  return (
    <div className={cn({ "overflow-hidden": isOverlayVisible })}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/classified-ad/:id" element={<ClassifiedAd />}></Route>
        <Route path="/towns" element={<TownsPage />}></Route>

        <Route path="/town/:id" element={<TownPage />}></Route>
        {isLoggedInLocalStorage && (
          <Route path="/user" element={<UserPage />}></Route>
        )}
        {isLoggedInLocalStorage && (
          <Route path="/change" element={<ChangPage />}></Route>
        )}
        {isLoggedInLocalStorage && (
          <Route
            path="/classified/create"
            element={<ClassifiedAdCreate />}
          ></Route>
        )}
        {!isLoggedInLocalStorage && (
          <>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </>
        )}
        <Route path="/*" element={<NotFoundPage />}></Route>
        {!isLoggedInLocalStorage && (
          <Route path="/user" element={<Navigate to="/" />} />
        )}
        {!isLoggedInLocalStorage && (
          <Route path="/change" element={<Navigate to="/" />} />
        )}
        {!isLoggedInLocalStorage && (
          <Route path="/classified/create" element={<Navigate to="/" />} />
        )}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
