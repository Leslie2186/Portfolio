import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {

  return <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
}

export default App
