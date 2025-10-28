import { Route, Routes } from 'react-router-dom';
import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Photos from '../pages/Photos';
import Plant from '../pages/Plant';
import Plants from '../pages/Plants';
import Register from '../pages/Register';

export default function RoutesApp() {
  const isLoggedIn = false; // substitui depois pela tua lógica real

  return (
    <Routes>
      {/* Public route */}
      <Route path="/" element={<Plants />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/register/" element={<Register />} />

      {/* Protected route */}
      <Route element={<MyRoute isClosed isLoggedIn={isLoggedIn} />}>
        {/* <Route path="/" element={<Plants />} /> */}
        <Route path="/plant/" element={<Plant />} />
        <Route path="/plant/:id/edit" element={<Plant />} />
        <Route path="/photos/:id" element={<Photos />} />
      </Route>

      {/* Page 404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
