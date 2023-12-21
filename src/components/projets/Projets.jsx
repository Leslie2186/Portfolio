import { Link } from 'react-router-dom';
import mobilequizz from "../../assets/mobileQuizz.png";
import tablettequizz from "../../assets/tabletteQuizz.png";
import pcquizz from "../../assets/pcquizz.png";
import mobilesh from "../../assets/mobileSH.png";
import tablettesh from "../../assets/tabletteSH.png";
import pcsh from "../../assets/pcSH.png";
import MesVacances from "../../assets/mesvacances.png";
import MVModifDelete from "../../assets/MVModifDelete.png";
import MVModifDeletePays from "../../assets/MVModifDeletePays.png";
import MVContact from "../../assets/MVContact.png";
import cadre from "../../assets/cadre.png";

import './Projets.css';

function Projets() {
  return (
    <div className='containProjets'>
        <h1>Mes Projets</h1>
        <div className='listProjets'>
            <ul>
                <div className='projet1containCadreHaut'>
                    <img src={cadre} alt="Cadre" />
                </div>
                <li className='projetQuizz'>
                    <h2>Quiz Biarritz</h2>
                    <p>Objectif: Réaliser un quizz permettant de découvrir la ville de Biarritz, son histoire et sa culture.</p>
                    <p className='green'>HTML / CSS / JavaScript / DOM / Git / GitHub</p>
                    <p className='deployed'>Cliquer sur une des images ci-dessous pour accéder au site</p>
                    <Link to="https://valihna.github.io/Projet-quiz/" target="_blank" >
                        <img src={mobilequizz} alt="Quiz Biarritz version mobile" className='versionMobile'/>
                        <img src={pcquizz} alt="Quiz Biarritz version pc" className='versionPc'/>
                        <img src={tablettequizz} alt="Quiz Biarritz version tablette" className='versionTablette'/>
                    </Link>
                </li>
                <div className='projet1containCadreBas'>
                    <img src={cadre} alt="Cadre" />
                </div>
                <div className='projet2containCadreHaut'>
                    <img src={cadre} alt="Cadre" />
                </div>
                <li className='projetSh'>
                    <h2>Super Hero Cards</h2>
                    <p>Objectif: Réaliser un site pour découvrir tous les super-héros existants, découvrir leurs caratéristiques et leurs skills.</p>
                    <p>Possibilité de mise en favoris de ses super-héros préférés et d'affrontement entre deux super-héros.</p>
                    <p className='green'>HTML / CSS / JavaScript / React / Express.js / MySQL / Git / GitHub</p>
                    <p className='deployed'>Cliquer sur une des images ci-dessous pour accéder au site</p>
                    <Link to="https://capteam-america.remote-fr-3.wilders.dev/" target="_blank">
                        <img src={mobilesh} alt="Super Hero Cards sur mobile" className='versionMobile'/>
                        <img src={tablettesh} alt="Super Hero Cards sur tablette" className='versionTablette'/>
                        <img src={pcsh} alt="Super Hero Cards sur pc" className='versionPc'/>
                    </Link>
                </li>
                <div className='projet2containCadreBas'>
                    <img src={cadre} alt="Cadre" />
                </div>
                <div className='projet3containCadreHaut'>
                    <img src={cadre} alt="Cadre" />
                </div>
                <li className='siteVacances'>
                    <h2>Les villes de mes vacances</h2>
                    <p>Objectif: Faire un site pour présenter toutes les villes que j'ai visité durant mes vacances.</p>
                    <p>Possibilité d'ajouter, de modifier et de supprimer une ville ou un pays.</p>
                    <p className='green'>HTML / CSS / JavaScript / React / Express.js / MySQL / Git / GitHub</p>
                    <img src={MesVacances} alt="Les villes où je suis allée en vacances"/>
                    <h4>Détails du site :</h4>
                    <ul className='autresImg'>
                        <li><img src={MVModifDelete} alt="Gestion des villes modification et suppression"/></li>
                        <li><img src={MVModifDeletePays} alt="Gestion des pays modification et suppression"/></li>
                        <li><img src={MVContact} alt="Page de contact du site"/></li>
                    </ul>
                </li>
                <div className='projet3containCadreBas'>
                    <img src={cadre} alt="Cadre" />
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Projets