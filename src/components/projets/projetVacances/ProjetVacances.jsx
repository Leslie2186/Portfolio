import { useEffect } from "react";
import voyageMobile from "../../../assets/voyageMobile.png";
import voyageTablette from '../../../assets/voyageTablette.png';
import voyagePc from '../../../assets/voyagePc.png';
import html from '../../../assets/html-5.png';
import css from '../../../assets/css-3.png';
import js from '../../../assets/javascript.png';
import git from '../../../assets/git.png';
import github from '../../../assets/github.png';
import react from '../../../assets/react.svg';
import express from '../../../assets/express.png';
import mysql from '../../../assets/mysql.png';
import "./ProjetVacances.css";

function ProjetVacances() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='siteVacances'>
      <h1>Voyages en mémoire</h1> 
      <p><span>OBJECTIF : </span> Ce site vise à <span>capturer</span> l'essence même des <span>voyages</span> que j'ai pu réaliser : l'exploration, la <span>découverte</span> et le <span>partage</span> <span>d'informations</span> et de souvenirs inoubliables. Que chaque clic soit une <span>invitation</span> à découvrir ces <span>lieux magiques</span> et à planifier <span>pour vous</span> de nouvelles <span>aventures</span>.</p> 
      <p><span>DESIGN : </span> Lumineux, élégant, formes arrondies, couleurs dominantes le bleu et le blanc.</p>
      <p><span>FONCTIONNEMENT : </span> Chaque clic sur le <span>tableau</span> d'une ville vous permettra de découvrir diverses <span>informations</span> la concernant. Du <span>pays</span>, aux heures d'ensoleillement, en passant par la <span>langue</span>, les monuments
      et les <span>visites</span> à ne pas rater, vous découvrirez pour chaque ville un ensemble de <span>souvenirs</span>, qui j'espère vous donnera <span>envie</span> d'en faire votre prochaine <span>destination</span>.</p>
      <div className='langagesOutils'>
        <h3>LANGAGE ET OUTILS UTILISES</h3>
        <ul>
          <li><img src={html} alt="Logo HTML"/></li>
          <li><img src={css} alt="Logo CSS"/></li>
          <li><img src={js} alt="Logo JavaScript"/></li>
          <li><img src={react} alt="Logo React"/></li>
          <li><img src={express} alt="Logo Express"/></li>
          <li><img src={mysql} alt="Logo MySQL"/></li>
          <li><img src={git} alt="Logo Git"/></li> 
          <li><img src={github} alt="Logo GitHub"/></li>
        </ul>
      </div>
      <div className='imageSite'>
            <img src={voyageMobile} alt="Voyages en mémoire version mobile" className='versionMobile'/>
            <img src={voyagePc} alt="Voyages en mémoire version pc" className='versionPc'/>
            <img src={voyageTablette} alt="Voyages en mémoire version tablette" className='versionTablette'/>
      </div>
      <div className='videoSitePV'>
      </div>
    </div>
  )
}

export default ProjetVacances