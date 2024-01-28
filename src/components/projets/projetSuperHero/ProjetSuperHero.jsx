import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobilesh from "../../../assets/mobileSH.png";
import tablettesh from "../../../assets/tabletteSH.png";
import pcsh from "../../../assets/pcSH.png";
import html from '../../../assets/html-5.png';
import css from '../../../assets/css-3.png';
import js from '../../../assets/javascript.png';
import git from '../../../assets/git.png';
import github from '../../../assets/github.png';
import react from '../../../assets/react.svg';
import express from '../../../assets/express.png';
import mysql from '../../../assets/mysql.png';
import './ProjetSuperHero.css';

function ProjetSuperHero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='projetSh'>
      <h1>Super Hero Cards</h1>
      <p><span>OBJECTIF : </span> Réaliser un site pour <span>découvrir</span> tous les <span>super-héros</span> existants, <span>redécouvrir</span> nos super-héros <span>préférés</span> et en apprendre toujours plus sur leurs <span>caratéristiques</span> et leurs <span>skills</span>.<br/>
      Possibilités de mettre en <span>favoris</span> ses super-héros préférés et de réaliser des <span>affrontements</span> entre deux super-héros.</p>
      <p><span>DESIGN : </span> Moderne, coloré, formes arrondies, boutons facilitant la prise en main, couleurs dominantes le blanc, le noir et le rouge.</p>
      <p><span>FONCTIONNEMENT : </span> Lorsque l'on arrive sur le site, il est possible de faire un <span>filtre</span> sur la <span>race</span> des super-héros. L'utilisateur a également la possibilité
      de <span>cliquer</span> sur un super-héro et de voir le <span>détail</span> de son profil, ses <span>caractéristiques</span> physiques et ses skills. L'utilisateur peut aussi mettre en <span>favoris</span> ses super-héros préférés.
      Le site dispose également d'un <span>ring</span>, il faut <span>sélectionner</span> deux <span>super-héros</span> sur la page d'accueil et aller sur l'onglet <span>"Versus"</span> pour lancer le combat.
      Enfin, la page <span>contact</span> permet d'envoyer un <span>mail</span> aux administrateurs.</p>
      <div className='langagesOutils'>
        <h3>LANGAGE ET OUTILS UTILISES</h3>
        <ul>
          <li><img src={html} alt="Logo HTML"/></li>
          <li><img src={css} alt="Logo CSS"/></li>
          <li><img src={js} alt="Logo JavaScript"/></li>
          <li><img src={react} alt="Logo JavaScript"/></li>
          <li><img src={express} alt="Logo JavaScript"/></li>
          <li><img src={mysql} alt="Logo JavaScript"/></li>
          <li><img src={git} alt="Logo Git"/></li> 
          <li><img src={github} alt="Logo GitHub"/></li>
        </ul>
      </div>
      <div className='imageSite'>
        <p className='deployed'>Cliquer sur une image pour accéder au site</p>
        <Link to="https://capteam-america.remote-fr-3.wilders.dev/" target="_blank">
            <img src={mobilesh} alt="Super Hero Cards sur mobile" className='versionMobile'/>
            <img src={pcsh} alt="Super Hero Cards sur pc" className='versionPc'/>
            <img src={tablettesh} alt="Super Hero Cards sur tablette" className='versionTablette'/>
        </Link>
      </div>
    </div>
  )
}

export default ProjetSuperHero