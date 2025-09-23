import '../styles/Experience.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Experience = () => (
  <section id="experience" className="mb-5">
    <h2 className="text-center">Work Experience</h2>
    <div className="d-flex justify-content-center">
      <div className="experience-container p-4 m-2">
        <Row style={{zIndex: 1}}>
          <Col xs={12}>
            <div className="experience-item p-4">
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div>
                <h5 className="mb-1">Associate Software Engineer </h5>
                <span style={{fontWeight: 'bold'}}>Jung Talents</span>
                <p style={{fontSize: '.9em'}}><em>July 2025 – Now</em></p>
                <ul>
                  <li>Developed high-performance backend applications using .NET Core and Entity Framework, ensuring easy maintenance.</li>
                  <li>Utilized AI tools like Copilot and ChatGPT, enhancing code quality and boosting performance by 40%.</li>
                  <li>Collaborated with team members to streamline workflows, achieving a 30% reduction in project completion time.</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="experience-item p-4">
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div className="mt-4">
                <h5 className="mb-1">Team Member </h5>
                <span style={{fontWeight: 'bold'}}>Vietnamese International Student At Swinburne</span>
                <p style={{fontSize: '.9em'}}><em>Feb 2023 – Feb 2024</em></p>
                <ul>
                  <li>Planning and organising events for Vietnamese students, creating an unforgettable experience for all attendees.</li>
                  <li>Consistently applied new ideas to event planning, increasing positive feedback by 60% compared to the last term.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>


  </section>
);

export default Experience;