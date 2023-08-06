// IMPORTS
import {Routes, Route} from 'react-router-dom';

// PAGES
import Home from './pages/Home/home'
import About from './pages/About/about'
import Error from './pages/Error/error'
import Location from './pages/Location/location'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
}
  
  export default App;
  