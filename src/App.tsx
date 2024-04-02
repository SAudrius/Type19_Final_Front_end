import { Route, Routes } from 'react-router-dom';

import { AdPage } from './pages/AdPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegisterPage } from './pages/RegisterPage';
import { TownPage } from './pages/TownPage';
import { TownsPage } from './pages/TownsPage';
import { UserPage } from './pages/UserPage';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/ad/:id' element={<AdPage />}></Route>
      <Route path='/towns' element={<TownsPage />}></Route>
      <Route path='/town/:townId' element={<TownPage />}></Route>
      <Route path='/user/:userId' element={<UserPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
      <Route path='/*' element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default App;
