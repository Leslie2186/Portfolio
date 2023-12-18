import './Presentation.css';
import cadre from "../../assets/cadre.png";

function Presentation() {
  return (
    <div className='containPresentation'>
        <h1>Développeuse Web Fullstack</h1>
        <div>
            <h2>Bonjour, je m&apos;appelle Leslie, je suis développeuse web Fullstack, spécialisée en JavaScript!</h2>
            <p>
               Etant curieuse de nature et passionnée par le développement, j’aime apprendre et me former sur de nouvelles technologies.<br/>
               Mes expériences professionnelles m’ont permis d’acquérir un ensemble de compétences et d’aptitudes que je souhaite mettre à profit dans votre entreprise.
            </p>
            <div className='containCadreHaut'>
                    <img src={cadre} alt="Cadre" />
            </div>
            <div className="competences">
                <div className="hardSkills">
                    <h4>Mes Hard skills</h4>
                    <div className="containHardSkills">
                        <ul>
                            <li className='green'>
                                HTML5
                            </li>
                            <li>
                                CSS3
                            </li>
                            <li className='green'>
                                JavaScript
                            </li>
                            <li>
                                ReactJs
                            </li>
                            <li className='green'>
                                Vite.Js
                            </li>
                            <li>
                                Node.Js
                            </li>
                            <li className='green'>
                                Express.Js
                            </li>
                            <li>
                                MySQL
                            </li>
                        </ul>
                        <ul>
                            <li className='green'>
                                Postman
                            </li>
                            <li>
                                Wordpress
                            </li>
                            <li className='green'>
                                Photoshop
                            </li>
                            <li>
                                Figma
                            </li>
                            <li className='green'>
                                Premiere
                            </li>
                            <li>
                                Canva
                            </li>
                            <li className='green'>
                                Trello
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="softSkills">
                    <h4>Mes Soft skills</h4>
                    <div className="containSoftSkills">
                        <ul>
                            <li className='green'>Curieuse</li>
                            <li>Organisée</li>
                            <li className='green'>Rigoureuse</li>
                            <li>Adaptable</li>
                            <li className='green'>Bonne communiquante</li>
                            <li>Bon esprit d&apos;équipe</li>
                            <li className='green'>Souci du travail bien fait</li>
                            <li>Pédagogue</li>
                            <li className='green'>Créative</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='containCadreBas'>
                    <img src={cadre} alt="Cadre" />
            </div>
            <div className='containProjets'>
                
            </div>
        </div>
    </div>
  )
}

export default Presentation