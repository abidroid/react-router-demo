import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Trainings from './pages/Trainings';
function App() {
  return (

    <div className="App">

      <nav>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/services" className='nav-item'>Services</Link>
        <Link to="/team" className='nav-item'>Team</Link>
        <Link to="/trainings" className='nav-item'>Trainings</Link>
        <Link to="/products" className='nav-item'>Our Products</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/trainings' element={<Trainings />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
      
      
     
    </div>
  );
}

export default App;
