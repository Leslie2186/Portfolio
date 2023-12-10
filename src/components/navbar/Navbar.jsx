import './Navbar.css';
import photoMoi from '../../assets/photoleslie.jpg';

function Navbar() {
  return (
    <nav className='menu'>
        <div>
            <img src={photoMoi} alt="Photo de Leslie"/>
        </div>
        <ul>
            <li><a href="/">Présentation</a></li>
            <li><a href="/Projets">Mes Projets</a></li>
            <li><a href="/Contact">Me contacter</a></li>
        </ul>
    </nav>
  )
}

export default Navbar