import { Link } from 'react-router-dom';
import mobilequizz from "../../../assets/mobileQuizz.png";
import tablettequizz from "../../../assets/tabletteQuizz.png";
import pcquizz from "../../../assets/pcquizz.png";
import './ProjetQuizz.css';

function ProjetQuizz() {
  return (
    <div className='projetQuizz'>
      <h2>Projet Quizz</h2>
      <p>Objectif: Réaliser un quizz permettant de découvrir la ville de Biarritz, son histoire et sa culture.</p>
      <p className='green'>HTML / CSS / JavaScript / DOM / Git / GitHub</p>
      <p className='deployed'>Cliquer sur une des images ci-dessous pour accéder au site</p>
      <Link to="https://valihna.github.io/Projet-quiz/" target="_blank" >
          <img src={mobilequizz} alt="Quiz Biarritz version mobile" className='versionMobile'/>
          <img src={pcquizz} alt="Quiz Biarritz version pc" className='versionPc'/>
          <img src={tablettequizz} alt="Quiz Biarritz version tablette" className='versionTablette'/>
      </Link>
    </div>
  )
}

export default ProjetQuizz