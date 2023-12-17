import {Link} from "react-router-dom";
import './Navbar.css';
import photoMoi from '../../assets/photoleslie.jpg';

function Navbar() {
  return (
    <nav className='menu'>
        <div className="containImgTitle">
            <img src={photoMoi} alt="Photo de Leslie"/><p>Leslie Pellegrin Moraud</p>
        </div>
        <ul>
            <li><Link to="/">// Présentation</Link></li>
            <li><Link to="/projets">// Mes Projets</Link></li>
            <li><Link to="/contact">// Me contacter</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar