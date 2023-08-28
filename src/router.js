// IMPORTS
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/About';
import Error from './pages/Error/error';
import Location from './pages/Location/location';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

function AppRoutes() {
  return (
    <>
      <div className='contenair'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default AppRoutes;
