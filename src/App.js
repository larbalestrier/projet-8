// IMPORTS
import {Routes, Route} from 'react-router-dom';

// PAGES
import Home from './pages/Home/home'
import About from './pages/About/about'
import Error from './pages/Error/error'
import Location from './pages/Location/location'

//LAYOUTS
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

//STYLES
import './style/app.scss'

function App() {
  return (
    <>
    <div className='contenair'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>      
    </div>
    <Footer/>
    </>
  );
}
  
  export default App;
  