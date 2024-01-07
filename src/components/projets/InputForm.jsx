import { Link } from 'react-router-dom';
import './InputForm.css';

function InputForm({title, link, imgMobile, altMobile, imgDesktop, altDesktop, imgTablette, altTablette, info}) {
  return (
    <li className='projets'>
        <h2>{title}</h2>
        <img src={imgMobile} alt={altMobile} className='images'/>
        <img src={imgDesktop} alt={altDesktop} className='images imgdesktop'/>
        <img src={imgTablette} alt={altTablette} className='images'/>
        <div>
            <Link to={link} className='voirplus'>
                <p>Voir plus ...</p>
            </Link>
        </div>
    </li>
  )
}

export default InputForm