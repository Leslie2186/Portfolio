import { Link } from 'react-router-dom';
import Quizbiarritz from "../../assets/quizbiarritz.png";
import SuperheroCards from "../../assets/superherocards.png";
import MesVacances from "../../assets/mesvacances.png";
import question from "../../assets/question.png";
import repquestion from "../../assets/repquestion.png";
import validationrep from "../../assets/validationrep.png"
import correctionrep  from "../../assets/correctionrep.png";
import finquizz from "../../assets/finquizz.png";
import detailSPC from "../../assets/detailunsuperhero.png";
import shcfavoris from "../../assets/SHCFavoris.png";
import versushaut from "../../assets/SHCVersusHaut.png";
import versusbas from "../../assets/SHCVersusBas.png";
import contact from "../../assets/SHCContact.png";

import './Projets.css';

function Projets() {
  return (
    <div className='containProjets'>
        <h1>Mes Projets</h1>
        <div className='listProjets'>
            <ul>
                <li>
                    <h2>Quiz Biarritz</h2>
                    <p>Objectif: Réaliser un quizz permettant de découvrir la ville de Biarritz, son histoire et sa culture.</p>
                    <p className='green'>HTML / CSS / JavaScript / DOM / Git / GitHub</p>
                    <p className='deployed'>Cliquer sur l'image pour y accéder</p>
                    <Link to="https://valihna.github.io/Projet-quiz/" target="_blank">
                        <img src={Quizbiarritz} alt="Quiz Biarritz"/>
                    </Link>
                    <h4>Détails du site :</h4>
                    <ul className='autresImg'>
                        <li><img src={question} alt="Question du quizz"/> <img src={repquestion} alt="Réponse à une question du quizz"/></li>
                        <li><img src={validationrep} alt="validation d'une question du quizz"/> <img src={correctionrep} alt="Image du quizz lors de la correction d'une réponse"/></li>
                        <li><img src={finquizz} alt="Image du score à la fin du quizz"/></li>
                    </ul>
                </li>
                <li>
                    <h2>Super Hero Cards</h2>
                    <p>Objectif: Réaliser un site pour découvrir tous les super-héros existants, découvrir leurs caratéristiques et leurs skills.</p>
                    <p>Possibilité de mise en favoris de ses super-héros préférés et d'affrontement entre deux super-héros.</p>
                    <p className='green'>HTML / CSS / JavaScript / React / Express.js / MySQL / Git / GitHub</p>
                    <p className='deployed'>Cliquer sur l'image pour y accéder</p>
                    <Link to="https://capteam-america.remote-fr-3.wilders.dev/" target="_blank">
                        <img src={SuperheroCards} alt="Super Hero Cards"/>
                    </Link>
                    <h4>Détails du site :</h4>
                    <ul className='autresImg'>
                        <li><img src={detailSPC} alt="Détail d'une carte de super-héro"/> <img src={shcfavoris} alt="Mise en favoris de super-héros"/></li>
                        <li><img src={versushaut} alt="Ring de combat entre deux super-héros partie haute"/> <img src={versusbas} alt="Ring de combat entre deux super-héros partie basse"/></li>
                        <li><img src={contact} alt="Page de contact du site"/></li>
                    </ul>
                </li>
                <li>
                    <h2>Les villes de mes vacances</h2>
                    <p>Objectif: Faire un site pour présenter toutes les villes que j'ai visité durant mes vacances.</p>
                    <p>Possibilité d'ajouter, de modifier et de supprimer une ville ou un pays.</p>
                    <p className='green'>HTML / CSS / JavaScript / React / Express.js / MySQL / Git / GitHub</p>
                    <img src={MesVacances} alt="Les villes où je suis allée en vacances"/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Projets