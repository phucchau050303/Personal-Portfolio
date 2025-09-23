import SkillTab from "../components/SkillTab";
import { Col, Row } from "react-bootstrap";
const Skills = () => (
  <section id="skills" className="mb-5">
    <p className='mb-3 text-center' style={{fontSize: '2.3rem', fontWeight: 'bold'}}>Skills</p>
    <Row>
        <Col lg={6} md={12} sm={12} className="mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
            <div className=" skill-tab p-5">
                <h2 class = "text-center">Frameworks</h2>
                <div className="skill-box">
                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">
                        <SkillTab skill="React" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                        <SkillTab skill="VueJS" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" />
                        <SkillTab skill=".NET" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png" />
                    </div>
                </div>
            </div>
        </Col>
        <Col lg={6} md={12} sm={12} className="mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
            <div className=" skill-tab p-5">
                <h2 className = "text-center">Programming Languages</h2>
                <div className="skill-box">
                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">
                        <SkillTab skill="C#" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png" />
                        <SkillTab skill="Python" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
                        <SkillTab skill="Kotlin" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" />            
                    </div>
                    <div className="d-flex justify-content-center flex-wrap gap-3 mt-3 mb-3">
                        <SkillTab skill="JavaScript" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" />
                        <SkillTab skill="HTML" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
                        <SkillTab skill="C++" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" />
                    </div>
                </div>
            </div>
        </Col>
    </Row>
    <Row>
        <Col lg={6} md={12} sm={12} className="mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
            <div className=" skill-tab p-5">
                <h2 className = "text-center">Cloud and Database</h2>
                <div className="skill-box">
                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">
                        <SkillTab skill="AWS" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/640px-Amazon_Web_Services_Logo.svg.png" />
                        <SkillTab skill="Azure" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" />
                        <SkillTab skill="MySQL" imageLink="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-svg-vector.svg" />            
                    </div>
                    <div className="d-flex justify-content-center flex-wrap gap-3 mt-3 mb-3">
                        <SkillTab skill="PostgreSQL" imageLink="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" />
                        
                    </div>
                </div>
            </div>
        </Col>
        <Col lg={6} md={12} sm={12} className="mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
            <div className=" skill-tab p-5">
                <h2 className = "text-center">Other</h2>
                <div className="skill-box">
                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">
                        <SkillTab skill="Copilot" imageLink="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Microsoft_Copilot_Icon.svg/1200px-Microsoft_Copilot_Icon.svg.png" />
                        <SkillTab skill="VSCode" imageLink="https://cdn.freebiesupply.com/logos/thumbs/2x/visual-studio-code-logo.png" />
                        <SkillTab skill="Git" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" />            
                    </div>
                    <div className="d-flex justify-content-center flex-wrap gap-3 mt-3 mb-3">
                        <SkillTab skill="Docker" imageLink="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" />
                        <SkillTab skill="Figma" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/960px-Figma-logo.svg.png" />
                        <SkillTab skill="Unity" imageLink="https://cdn.freebiesupply.com/logos/large/2x/unity-69-logo-png-transparent.png" />

                    </div>
                </div>
            </div>
        </Col>
    </Row>
  </section>
);

export default Skills;
