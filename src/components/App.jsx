import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
