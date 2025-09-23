import SkillTab from "../components/SkillTab";
import { Col, Row } from "react-bootstrap";
const Skills = () => (
  <section id="skills" className="mb-5">
    <p className='mb-3 text-center' style={{fontSize: '2.3rem', fontWeight: 'bold'}}>Skills</p>
    <Row>
        <Col md={6} sm={12} className="mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
            <div className=" skill-tab p-5">
                <h2 class = "text-center">Frameworks</h2>
                <Row style = {{height: '140px'}}>
                    <Col xs={6} md={4} className="mb-3 mt-3 mx-auto  d-flex justify-content-center">
                        <SkillTab skill="React" imageLink="src/assets/React-icon.svg.png" />
                    </Col>
                    <Col xs={6} md={4} className=" mb-3 mt-3 d-flex justify-content-center">
                        <SkillTab skill="VueJS" imageLink="src/assets/Vue.js_Logo_2.svg.png" />
                    </Col>
                    <Col xs={12} md={4} className=" mb-3 mt-3 d-flex justify-content-center">
                        <SkillTab skill=".NET" imageLink="src/assets/Microsoft_.NET_logo.svg.png" />
                    </Col>
                </Row>
            </div>
        </Col>
        <Col md={6} sm={12} className="mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
            <div className=" skill-tab p-5">
                <h2 className = "text-center">Programming Languages</h2>
                <div style = {{height: '200px'}}>
                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">
                        <SkillTab skill="C#" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png" />
                        <SkillTab skill="Python" imageLink="src/assets/python-svgrepo-com.png" />
                        <SkillTab skill="Kotlin" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" />            
                    </div>
                    <div className="d-flex justify-content-center flex-wrap gap-3 mt-3 mb-3">
                        <SkillTab skill="JavaScript" imageLink="src/assets/JavaScript-logo.png" />
                        <SkillTab skill="HTML" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
                        <SkillTab skill="C++" imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" />
                    </div>
                </div>
            </div>
        </Col>
    </Row>
    <Row>
        <Col md={6} sm={12} className="mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
            <div className=" skill-tab p-5">
                <h2 className = "text-center">Cloud and Database</h2>
                <div style = {{height: '140px'}}>
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
    </Row>
  </section>
);

export default Skills;
