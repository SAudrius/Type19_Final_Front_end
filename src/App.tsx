import { Route, Routes } from "react-router-dom";

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

import { ListPage } from "./pages/ListPage";
import TownPage from "./pages/TownPage";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/classified-ad/:id" element={<ClassifiedAd />}></Route>
        <Route path="/towns" element={<TownsPage />}></Route>
        <Route path="/town/:id" element={<TownPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
