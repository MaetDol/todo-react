import { Route, Routes } from 'react-router-dom';
import { Home } from './home';

export default function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
