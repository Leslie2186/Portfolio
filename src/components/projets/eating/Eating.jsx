import { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='projetEating'>
      <h1>Eating Nam Nam</h1> 
      <p><span>OBJECTIF : </span> Eating Nam Nam est un site de <span>partage</span> de <span>recettes</span>. L'utilisateur à la possibilité de <span>s'inscrire</span> et <span>d'ajouter</span> de nouvelles <span>recettes</span> et de nouveaux <span>ingrédients</span>. Que ce soit une <span>tradition</span> familiale transmise depuis des <span>générations</span> ou une <span>découverte</span> gustative lors d'un voyage lointain, <span>Eating Nam Nam</span> cherche à raconter une <span>histoire</span> à travers chaque <span>partage</span> de recette ou chaque <span>saveur</span> éveille un souvenir.</p> 
      <p><span>DESIGN : </span> Elégant, formes arrondies, couleurs dominantes le orange, le vert et le noir.</p>
      <p><span>FONCTIONNEMENT : </span> Les utilisateurs peuvent se créer un <span>compte</span> sur l'application et accéder à un <span>espace personnel</span>. 
      Ils ont la possibilité de <span>créer</span> des <span>recettes</span>, de <span>rajouter</span> des <span>ingrédients</span> et de mettre en <span>favoris</span> leurs recettes préférées. 
      Les <span>administrateurs</span> ont accés à un <span>dashboard</span> présentant les <span>statistiques</span> du site et permettant de <span>gérer</span> les users, les recettes et les ingrédients.</p>
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
        <Link to="https://eating-nam-nam.remote-fr-3.wilders.dev/" target="_blank" >
            <img src={eatingmobile} alt="Eating Nam Nam version mobile" className='versionMobile'/>
            <img src={eatingpc} alt="Eating Nam Nam version pc" className='versionPc'/>
            <img src={eatingtablette} alt="Eating Nam Nam version tablette" className='versionTablette'/>
        </Link>
      </div>
    </div>
  )
}

export default ProjetEating