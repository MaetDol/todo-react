import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login/Login';

export default function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
