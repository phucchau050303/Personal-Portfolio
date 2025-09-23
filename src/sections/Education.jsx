import SkillTab from "../components/SkillTab";
import { Col, Row } from "react-bootstrap";
const Education = () => (
  <section id="education" className="mb-5">
    <h2 className="text-center">Education</h2>
      <div className="d-flex justify-content-center">
      <div className="experience-container p-4 m-2">
        <Row style={{zIndex: 1}}>
          <Col xs={12}>
            <div className="experience-item p-4">
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div>
                <h5 className="mb-1">Bachelor of Computer Science </h5>
                <span style={{fontWeight: 'bold'}}>Swinburne University of Technology</span>
                <p style={{fontSize: '.9em'}}><em>Aug 2022 – Aug 2025</em></p>
                <ul>
                  <li>Learnt crucial programming skills and technologies as a base to explore further</li>
                  <li>Utilised different frameworks to develop computer software such as games, web app, etc.</li>
                  <li>Working on several projects with real clients to achieve essential real-world work experience</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </section>
);

export default Education;
