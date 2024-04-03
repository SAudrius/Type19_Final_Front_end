import { Route, Routes } from 'react-router-dom';

import { Header } from '@/components/layout/Header/index';
import {
  AdPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  TownPage,
  TownsPage,
  UserPage,
} from '@/pages';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/ad/:id' element={<AdPage />}></Route>
        <Route path='/towns' element={<TownsPage />}></Route>
        <Route path='/town/:townId' element={<TownPage />}></Route>
        <Route path='/user' element={<UserPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
