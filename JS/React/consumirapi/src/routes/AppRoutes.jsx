import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import MyRoute from './ProtectedRoute';

import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Photos from '../pages/Photos';
import Plant from '../pages/Plant';
import Plants from '../pages/Plants';
import Register from '../pages/Register';

export default function AppRoutes() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/"
        element={!isLoggedIn ? <LandingPage /> : <Navigate to="/plants" />}
      />
      <Route
        path="/plants"
        element={isLoggedIn ? <Plants /> : <Navigate to="/" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/user-register" element={<Register />} />

      {/* Protected routes */}
      <Route element={<MyRoute isClosed />}>
        <Route path="/plant/:id/edit" element={<Plant />} />
        <Route path="/photos/:id" element={<Photos />} />
        <Route path="/plant-register" element={<Plant />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
