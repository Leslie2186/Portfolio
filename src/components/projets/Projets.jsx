import mobilequizz from "../../assets/mobileQuizz.png";
import tablettequizz from "../../assets/tabletteQuizz.png";
import pcquizz from "../../assets/pcquizz.png";
import mobilesh from "../../assets/mobileSH.png";
import tablettesh from "../../assets/tabletteSH.png";
import pcsh from "../../assets/pcSH.png";
import MesVacances from "../../assets/mesvacances.png";
import lorealmobile from "../../assets/lorealmobile.png";
import lorealtablette from "../../assets/lorealtablette.png";
import lorealpc from "../../assets/lorealpc.png";
import MVModifDelete from "../../assets/MVModifDelete.png";
import MVContact from "../../assets/MVContact.png";
import eatingmobile from "../../assets/eatingmobile.png";
import eatingtablette from "../../assets/eatingtablette.png";
import eatingpc from "../../assets/eatingpc.png";
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
                    title= "L'Oréal - 'BeWith' la nouvelle Egérie"
                    link= "/loreal"
                    imgMobile= {lorealmobile}
                    altMobile= "L'Oréal BeWith nouvelle Egérie sur mobile"
                    imgDesktop= {lorealpc}
                    altDesktop= "L'Oréal BeWith nouvelle Egérie sur pc"
                    imgTablette= {lorealtablette}
                    altTablette= "L'Oréal BeWith nouvelle Egérie sur tablette"
                    info= "Objectif: Faire un site pour L'Oréal, pour lancer l'évènement 'BeWith' la nouvelle Egérie."
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
                <InputForm 
                    title= "Eating Nam Nam"
                    link= "/eating"
                    imgMobile= {eatingmobile}
                    altMobile= "Eating Nam Nam, le site de partage de recettes sur mobile"
                    imgDesktop= {eatingpc}
                    altDesktop= "Eating Nam Nam, le site de partage de recettes sur pc"
                    imgTablette= {eatingtablette}
                    altTablette= "Eating Nam Nam, le site de partage de recettes sur tablette"
                    info= "Objectif: Faire un site de partage de recettes.<br/> Possibilité d'ajouter une recette ou un ingrédient."
                />
            </ul>
        </div>
    </div>
  )
}

export default Projets