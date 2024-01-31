import { useEffect } from "react";
import { Link } from "react-router-dom";
import html from '../../../assets/html-5.png';
import css from '../../../assets/css-3.png';
import js from '../../../assets/javascript.png';
import git from '../../../assets/git.png';
import github from '../../../assets/github.png';
import react from '../../../assets/react.svg';
import express from '../../../assets/express.png';
import mysql from '../../../assets/mysql.png';
import lorealMobile from "../../../assets/lorealmobile.png";
import lorealTablette from "../../../assets/lorealtablette.png";
import lorealPc from "../../../assets/lorealpc.png";
import './Loreal.css';

function Loreal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="projetLoreal">
      <h1>L'Oréal "BeWith"</h1> 
      <p><span>OBJECTIF : </span> Réaliser un <span>évènement</span> L'Oréal permettant de <span>redynamiser</span> les intéractions en <span>B&B</span> et en <span>B&C</span> pour le lancement de la prochaine gamme de <span>coloration</span>.
      Ici l'évènement s'appelle "BeWith" et à pour but de trouver la nouvelle égérie de L'Oréal. Préparez-vous à <span>découvrir</span> un site entre <span>beauté</span> et <span>authenticité</span> avec Be With.</p> 
      <p><span>DESIGN : </span> Sobre et élégant, les formes et les couleurs sont en accord avec les sites L'Oréal.</p>
      <p><span>FONCTIONNEMENT : </span> Le site se compose d'une page d'accueil présentant le <span>concept</span> de l'évènement. Les candidates doivent  <span>s'inscrire</span> sur le formulaire à leur disposition sur le site.
      Elles <span>postent</span> une photo au <span>naturel</span>. Par la suite, elles vont chez leurs <span>coiffeurs</span> L'Oréal le plus proche et choisissent parmis la nouvelle <span>gamme une coloration</span> et une coupe.
      Ensuite, elles retournent sur le site pour <span>poster</span> leurs photos maquillées et <span>coiffées</span>. Les <span>admins</span> de chez L'Oréal choisissent <span>50 filles</span> à départager.
      Les <span>visiteurs</span> du site peuvent s'inscrire pour <span>voter</span> parmis les 50 filles restantes. La grande <span>finale</span> aura lieu à Paris et sera retransmis sur la <span>chaîne Youtube</span> de L'Oréal.
      La <span>final</span> se fera en la présence de la <span>guest</span> et égérie <span>Eva Longoria</span>.</p>
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
        <p className='deployed'>Cliquer sur une image pour accéder à la vidéo Youtube du site</p>
          <Link to="https://youtu.be/6eUdasflgcA" target="_blank">
            <img src={lorealMobile} alt="Super Hero Cards sur mobile" className='versionMobile'/>
            <img src={lorealPc} alt="Super Hero Cards sur pc" className='versionPc'/>
            <img src={lorealTablette} alt="Super Hero Cards sur tablette" className='versionTablette'/>
          </Link>
      </div>
    </div>
  )
}

export default Loreal