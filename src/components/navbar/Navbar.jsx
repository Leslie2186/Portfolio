import {Link} from "react-router-dom";
import './Navbar.css';


function Navbar() {
  return (
    <nav className='menu'>
        <div id="containName">
          <Link to="/"><p>LPM</p></Link>
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