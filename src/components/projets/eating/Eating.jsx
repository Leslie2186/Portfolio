import { Link } from 'react-router-dom';
import eatingmobile from "../../../assets/eatingmobile.png";
import eatingtablette from "../../../assets/eatingtablette.png";
import eatingpc from "../../../assets/eatingpc.png";
import html from '../../../assets/html-5.png';
import css from '../../../assets/css-3.png';
import js from '../../../assets/javascript.png';
import git from '../../../assets/git.png';
import github from '../../../assets/github.png';
import react from '../../../assets/react.svg';
import express from '../../../assets/express.png';
import mysql from '../../../assets/mysql.png';
import './Eating.css';

function ProjetEating() {
  return (
    <div className='projetEating'>
      <h1>Eating Nam Nam</h1> 
      <p><span>OBJECTIF : </span> Réaliser un site de <span>partage</span> de <span>recettes</span>. Possibilité de s'inscrire et <span>d'ajouter</span> de nouvelles <span>recettes</span> et de nouveaux <span>ingrédients</span>.</p> 
      <p><span>DESIGN : </span> Elégant, formes arrondies, couleurs dominantes le orange, le vert et le noir.</p>
      <p><span>FONCTIONNEMENT : </span> Les utilisateurs peuvent se créer un <span>compte</span> sur l'application et accéder à un <span>espace personnel</span>. 
      Ils ont la possibilité de <span>créer</span> des <span>recettes</span>, de <span>rajouter</span> des <span>ingrédients</span> et de mettre en <span>favoris</span> leurs recettes préférées. 
      Les <span>administrateurs</span> ont accés à un <span>dashboard</span> permettant de <span>gérer</span> les users (ajouter, modifier, supprimer).</p>
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
        <p className='deployed'>Cliquer sur une image pour accéder au site</p>
        <Link to="/" target="_blank" >
            <img src={eatingmobile} alt="Eating Nam Nam version mobile" className='versionMobile'/>
            <img src={eatingpc} alt="Eating Nam Nam version pc" className='versionPc'/>
            <img src={eatingtablette} alt="Eating Nam Nam version tablette" className='versionTablette'/>
        </Link>
      </div>
    </div>
  )
}

export default ProjetEating