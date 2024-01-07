import MesVacances from "../../../assets/mesvacances.png";
import MVModifDelete from "../../../assets/MVModifDelete.png";
import MVModifDeletePays from "../../../assets/MVModifDeletePays.png";
import MVContact from "../../../assets/MVContact.png";


function ProjetVacances() {
  return (
    <div className='siteVacances'>
      <h2>Les Villes De Mes Vacances</h2>
      <p>Objectif: Faire un site pour présenter toutes les villes que j'ai visité durant mes vacances.</p>
      <p>Possibilité d'ajouter, de modifier et de supprimer une ville ou un pays.</p>
      <p className='blue'>HTML / CSS / JavaScript / React / Express.js / MySQL / Git / GitHub</p>
      <img src={MesVacances} alt="Les villes où je suis allée en vacances"/>
      <h4>Détails du site :</h4>
      <ul className='autresImg'>
          <li><img src={MVModifDelete} alt="Gestion des villes modification et suppression"/></li>
          <li><img src={MVModifDeletePays} alt="Gestion des pays modification et suppression"/></li>
          <li><img src={MVContact} alt="Page de contact du site"/></li>
      </ul>
    </div>
  )
}

export default ProjetVacances