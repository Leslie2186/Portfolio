import './Presentation.css';
import photoMoi from '../../assets/photoleslie.jpg';
import html from '../../assets/html-5.png';
import css from '../../assets/css-3.png';
import js from '../../assets/javascript.png';
import react from '../../assets/react.svg';
import vite from '../../assets/vite.png';
import express from '../../assets/express.png';
import node from '../../assets/nodejs.png';
import mysql from '../../assets/mysql.png';
import postman from '../../assets/postman.png';
import wordpress from '../../assets/wordpress.png';
import photoshop from '../../assets/photoshop.png';
import figma from '../../assets/figma.png';
import premiere from '../../assets/premiere.png';
import canva from '../../assets/canva.png';
import trello from '../../assets/trello.png';

function Presentation() {
  return (
    <div className='containPresentation'>
        <div className='containTitleImg'>
            <h1>Bonjour, je m&apos;appelle <span>Leslie</span> <br/> Je suis développeuse web <span>Fullstack</span></h1>
            <img src={photoMoi} alt="Photo de Leslie"/>
        </div>
        <div>
            <p>
               Etant <span>curieuse</span> de nature et <span>passionnée</span> par le développement, j’aime <span>apprendre</span> et me former sur de nouvelles technologies.<br/>
               Mes expériences <span>professionnelles</span> m’ont permis d’acquérir un ensemble de <span>compétences</span> et d’aptitudes que je souhaite mettre à profit dans votre entreprise.
            </p>
            <div className="competences">
                <div className="hardSkills">
                    <h4>HARD SKILLS</h4>
                    <div className="containHardSkills">
                        <ul>
                            <li>
                                <img src={html} alt="Logo Html"/>
                            </li>
                            <li>
                                <img src={css} alt="Logo Css"/>
                            </li>
                            <li>
                                <img src={js} alt="Logo JavaScript"/>
                            </li>
                            <li>
                                <img src={react} alt="Logo React"/>
                            </li>
                            <li>
                                <img src={vite} alt="Logo Vite.Js"/>
                            </li>
                            <li>
                                <img src={node} alt="Logo Node.Js"/>
                            </li>
                            <li>
                                <img src={express} alt="Logo Express.Js"/>
                            </li>
                            <li>
                                <img src={mysql} alt="Logo MySQL"/>
                            </li>
                            <li>
                                <img src={postman} alt="Logo Postman"/>
                            </li>
                            <li>
                                <img src={wordpress} alt="Logo Wordpress"/>
                            </li>
                            <li>
                                <img src={photoshop} alt="Logo Photoshop"/>
                            </li>
                            <li>
                                <img src={figma} alt="Logo Figma"/>
                            </li>
                            <li>
                                <img src={premiere} alt="Logo Premiere"/>
                            </li>
                            <li>
                             <img src={canva} alt="Logo Canva"/>
                            </li>
                            <li>
                             <img src={trello} alt="Logo Trello"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='containProjets'>
                
            </div>
        </div>
    </div>
  )
}

export default Presentation