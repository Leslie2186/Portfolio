import {Link} from "react-router-dom";
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import "./Footer.css";

function Footer() {
  return (
    <div className="containFooter">
        <p>© Leslie Pellegrin Moraud</p>
        <div className="socialNetwork">
            <div><Link to="https://github.com/Leslie2186"><img src={github} alt="Logo GitHub" className="github"/></Link></div>
            <div><Link to="https://linkedin.com/in/lesliemoraud"><img src={linkedin} alt="Logo Linkedin" className="linkedin"/></Link></div>
        </div>
    </div>
  )
}

export default Footer