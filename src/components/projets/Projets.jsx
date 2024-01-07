import mobilequizz from "../../assets/mobileQuizz.png";
import tablettequizz from "../../assets/tabletteQuizz.png";
import pcquizz from "../../assets/pcquizz.png";
import mobilesh from "../../assets/mobileSH.png";
import tablettesh from "../../assets/tabletteSH.png";
import pcsh from "../../assets/pcSH.png";
import MesVacances from "../../assets/mesvacances.png";
import MVModifDelete from "../../assets/MVModifDelete.png";
import MVContact from "../../assets/MVContact.png";
import InputForm from './InputForm';
import './Projets.css';

function Projets() {
  return (
    <div className='containProjets'>
        <h1>Mes Projets</h1>
        <div className='listProjets'>
            <ul>
                <InputForm 
                    title= "Quiz Biarritz"
                    link= "/projetQuizz"
                    imgMobile= {mobilequizz}
                    altMobile= "Quiz Biarritz version mobile"
                    imgDesktop= {pcquizz}
                    altDesktop= "Quiz Biarritz version pc"
                    imgTablette= {tablettequizz}
                    altTablette= "Quiz Biarritz version tablette"
                    info= "Objectif: Réaliser un quizz permettant de découvrir la ville de Biarritz, son histoire et sa culture."
                />
                <InputForm 
                    title= "Super Hero Cards"
                    link= "/projetSuperHero"
                    imgMobile= {mobilesh}
                    altMobile= "Super Hero Cards sur mobile"
                    imgDesktop= {pcsh}
                    altDesktop= "Super Hero Cards sur pc"
                    imgTablette= {tablettesh}
                    altTablette= "Super Hero Cards sur tablette"
                    info= "Objectif: Réaliser un site pour découvrir tous les super-héros existants, découvrir leurs caratéristiques et leurs skills. <br/> Possibilité de mise en favoris de ses super-héros préférés et d'affrontement entre deux super-héros."
                />
                <InputForm 
                    title= "Les Villes De Mes Vacances"
                    link= "/projetVacances"
                    imgMobile= {MesVacances}
                    altMobile= "Les villes où je suis allée en vacances"
                    imgDesktop= {MVContact}
                    altDesktop= "Page de contact du site"
                    imgTablette= {MVModifDelete}
                    altTablette= "Gestion des villes modification et suppression"
                    info= "Objectif: Faire un site pour présenter toutes les villes que j'ai visité durant mes vacances.<br/> Possibilité d'ajouter, de modifier et de supprimer une ville ou un pays."
                />
            </ul>
        </div>
    </div>
  )
}

export default Projets