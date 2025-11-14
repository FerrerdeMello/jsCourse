import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function RoutesApp() {
  const isLoggedIn = false; // substitui depois pela tua lógica real

  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/login" element={<Login />} />

      {/* Rota protegida */}
      <Route element={<MyRoute isClosed isLoggedIn={isLoggedIn} />}>
        <Route path="/" element={<Login />} />
      </Route>

      {/* Página 404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
