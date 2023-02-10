import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
