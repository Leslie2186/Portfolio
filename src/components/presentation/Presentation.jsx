import './Presentation.css';

function Presentation() {
  return (
    <div>
        <h1>Portfolio - Leslie Pellegrin Moraud</h1>
        <h2>Développeuse Web Fullstack</h2>
        <div>
            <h3>Bonjour, je m&apos;appelle Leslie, je suis développeuse web Fullstack, spécialisée en JavaScript!</h3>
            <p>
               Etant curieuse de nature et passionnée par le développement, j’aime apprendre et me former sur de nouvelles technologies.<br/>
               Mes expériences professionnelles m’ont permis d’acquérir un ensemble de compétences et d’aptitudes que je souhaite mettre à profit dans votre entreprise.
            </p>
            <div className="competences">
                <div className="hardSkills">
                    <h4>Mes Hard skills :</h4>
                    <div className="containHardSkills">
                        <ul>
                            <li>
                                HTML5
                            </li>
                            <li>
                                CSS3
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                ReactJs
                            </li>
                            <li>
                                Vite.Js
                            </li>
                            <li>
                                Node.Js
                            </li>
                            <li>
                                Express.Js
                            </li>
                            <li>
                                MySQL
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Postman
                            </li>
                            <li>
                                Wordpress
                            </li>
                            <li>
                                Photoshop
                            </li>
                            <li>
                                Figma
                            </li>
                            <li>
                                Premiere
                            </li>
                            <li>
                                Canva
                            </li>
                            <li>
                                Trello
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="softSkills">
                    <h4>Mes Soft skills :</h4>
                    <div className="containSoftSkills">
                        <ul>
                            <li>Curieuse</li>
                            <li>Organisée</li>
                            <li>Rigoureuse</li>
                            <li>Adaptable</li>
                            <li>Bonne communiquante</li>
                            <li>Bon esprit d&apos;équipe</li>
                            <li>Souci du travail bien fait</li>
                            <li>Pédagogue</li>
                            <li>Créative</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='containProjets'>
                
            </div>
        </div>
    </div>
  )
}

export default Presentation