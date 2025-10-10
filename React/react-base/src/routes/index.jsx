import { Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function RoutesApp() {
  return (
    <Routes>
      <MyRoute exact path="/" element={<Login />} />
      <MyRoute exact path="/login" element={<Login />} />
      <MyRoute exact path="*" element={<Page404 />} />
    </Routes>
  );
}
