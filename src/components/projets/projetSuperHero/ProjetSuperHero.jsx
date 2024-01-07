import { Link } from 'react-router-dom';
import mobilesh from "../../../assets/mobileSH.png";
import tablettesh from "../../../assets/tabletteSH.png";
import pcsh from "../../../assets/pcSH.png";

function ProjetSuperHero() {
  return (
    <div className='projetSh'>
      <h2>Super Hero Cards</h2>
      <p>Objectif: Réaliser un site pour découvrir tous les super-héros existants, découvrir leurs caratéristiques et leurs skills.</p>
      <p>Possibilité de mise en favoris de ses super-héros préférés et d'affrontement entre deux super-héros.</p>
      <p className='blue'>HTML / CSS / JavaScript / React / Express.js / MySQL / Git / GitHub</p>
      <p className='deployed'>Cliquer sur une des images ci-dessous pour accéder au site</p>
      <Link to="https://capteam-america.remote-fr-3.wilders.dev/" target="_blank">
          <img src={mobilesh} alt="Super Hero Cards sur mobile" className='versionMobile'/>
          <img src={tablettesh} alt="Super Hero Cards sur tablette" className='versionTablette'/>
          <img src={pcsh} alt="Super Hero Cards sur pc" className='versionPc'/>
      </Link>
    </div>
  )
}

export default ProjetSuperHero