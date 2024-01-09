import { Link } from 'react-router-dom';
import mobilequizz from "../../../assets/mobileQuizz.png";
import tablettequizz from "../../../assets/tabletteQuizz.png";
import pcquizz from "../../../assets/pcquizz.png";
import html from '../../../assets/html-5.png';
import css from '../../../assets/css-3.png';
import js from '../../../assets/javascript.png';
import git from '../../../assets/git.png';
import github from '../../../assets/github.png';
import './ProjetQuizz.css';

function ProjetQuizz() {
  return (
    <div className='projetQuizz'>
      <h1>Projet Quizz</h1> 
      <p><span>OBJECTIF : </span> Réaliser un quizz permettant de <span>découvrir</span> la ville de <span>Biarritz</span>, son histoire et sa culture.</p> 
      <p><span>DESIGN : </span> Sobre, élégant, formes arrondies, couleurs dominantes le bleu, le gris et le noir.</p>
      <p><span>FONCTIONNEMENT : </span> Pour chaque question, une seule bonne <span>réponse</span>. Lors de la <span>sélection</span> le bouton de la réponse devient bleu.
      Après validation, si la réponse est <span>juste</span> elle passe en <span>vert</span>, sinon elle passe en rouge et la bonne réponse devient verte.
      Un <span>paragraphe</span> expliquant la réponse <span>apparait</span> également.
      A la <span>fin</span> du quizz, le <span>score</span> apparait dans une pop-up.</p>
      <div className='langagesOutils'>
        <h3>LANGAGE ET OUTILS UTILISES</h3>
        <ul>
          <li><img src={html} alt="Logo HTML"/></li>
          <li><img src={css} alt="Logo CSS"/></li>
          <li><img src={js} alt="Logo JavaScript"/></li>
          <li><img src={git} alt="Logo Git"/></li> 
          <li><img src={github} alt="Logo GitHub"/></li>
        </ul>
      </div>
      <div className='imageSite'>
        <p className='deployed'>Cliquer sur une image pour accéder au site</p>
        <Link to="https://valihna.github.io/Projet-quiz/" target="_blank" >
            <img src={mobilequizz} alt="Quiz Biarritz version mobile" className='versionMobile'/>
            <img src={pcquizz} alt="Quiz Biarritz version pc" className='versionPc'/>
            <img src={tablettequizz} alt="Quiz Biarritz version tablette" className='versionTablette'/>
        </Link>
      </div>
    </div>
  )
}

export default ProjetQuizz