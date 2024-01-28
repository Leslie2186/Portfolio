import mobilequizz from "../../assets/mobileQuizz.png";
import tablettequizz from "../../assets/tabletteQuizz.png";
import pcquizz from "../../assets/pcquizz.png";
import mobilesh from "../../assets/mobileSH.png";
import tablettesh from "../../assets/tabletteSH.png";
import pcsh from "../../assets/pcSH.png";
import vacancesMobile from "../../assets/vacancesMobile.png";
import vacancesTablette from "../../assets/vacancesTablette.png";
import vacancesPc from "../../assets/vacancesPc.png";
import lorealmobile from "../../assets/lorealmobile.png";
import lorealtablette from "../../assets/lorealtablette.png";
import lorealpc from "../../assets/lorealpc.png";
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
                    info= "Bienvenue à Biarritz, une ville envoûtante nichée sur la côte basque française. Son histoire riche et sa culture vibrante caractérisent cette destination balnéaire unique. Êtes-vous prêt à explorer les trésors cachés de Biarritz ? Alors, plongez dans notre quizz envoûtant !"
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
                    info= "Bienvenue dans le monde envoûtant des super héros, où le courage, la justice et le pouvoir se rencontrent ! Préparez-vous à découvrir de nouveaux héros, à redécouvrir vos super héros préférés et à en apprendre plus sur eux dans chaque carte de notre collection. Êtes-vous prêt à rejoindre la ligue des héros et à assister à des affrontements épiques ?"
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
                    info= "Bienvenue dans l'univers Be With, où la beauté s'unit à l'authenticité pour célébrer la diversité, l'inclusion et l'individualité. Chez L'Oréal, nous croyons que la véritable essence de la beauté réside dans la confiance en soi et la capacité à exprimer sa propre histoire. C'est dans cet esprit que nous sommes fiers de présenter notre nouvel évènement 'Be With la nouvelle Egérie', une source d'inspiration qui incarne la force, la grâce et la passion. "
                />
                <InputForm 
                    title= "Voyages en mémoire"
                    link= "/projetVacances"
                    imgMobile= {vacancesMobile}
                    altMobile= "Les villes de mes vacances version mobile"
                    imgDesktop= {vacancesPc}
                    altDesktop= "Les villes de mes vacances version desktop"
                    imgTablette= {vacancesTablette}
                    altTablette= "Les villes de mes vacances version tablette"
                    info= "Bienvenue dans mon carnet de voyage, un témoignage de mes souvenirs à travers les villes captivantes que j'ai eu le privilège de visiter. Images, informations utiles, visites à ne pas rater, rejoignez-moi dans cette aventure et que chaque destination inspire votre prochaine escapade et vous rappelle les merveilles qui attendent ceux qui osent explorer le monde!"
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
                    info= "Bienvenue sur Eating Nam Nam, une plateforme où les passions se rencontrent, les cultures s'entremêlent et les papilles s'éveillent. Dans nos cuisines virtuelles, nous célébrons la diversité des saveurs et des traditions, partageant des recettes chéries qui racontent des histoires de famille, de voyages et de découvertes. Rejoignez notre communauté gourmande pour explorer un monde de délices culinaires !"
                />
            </ul>
        </div>
    </div>
  )
}

export default Projets