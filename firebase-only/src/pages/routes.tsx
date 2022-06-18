import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

export default function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
