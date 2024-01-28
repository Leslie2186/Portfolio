import { useState } from 'react';
import { Link } from 'react-router-dom';
import './InputForm.css';

function InputForm({title, link, imgMobile, altMobile, imgDesktop, altDesktop, imgTablette, altTablette, info}) {
  // const [infoVisible, setInfoVisible] = useState(false);
  // const [visible, setVisible] = useState("");

  // if(infoVisible){
  //   setVisible("hidden");
  //   setInfoVisible(false);
  // }else{
  //   setVisible("visible");
  //   setInfoVisible(true);
  // }

  return (
    <li className='projets'>
        <div className='containImg'>
          <div className='containInfo'>
            <p>{info}</p>
          </div>
          <h2>{title}</h2>
          <img src={imgMobile} alt={altMobile} className='images'/>
          <img src={imgDesktop} alt={altDesktop} className='images imgdesktop'/>
          <img src={imgTablette} alt={altTablette} className='images'/>
        </div>
        <div>
            <Link to={link} className='voirplus'>
                <p>Voir plus ...</p>
            </Link>
        </div>
    </li>
  )
}

export default InputForm