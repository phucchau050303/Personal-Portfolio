import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../components/CertificateCard.css"
import TechnologyTab from "../components/TechnologyTab";

const Projects = () => (
  <section id="projects" className="mb-5">
    <h2 className="text-center">Projects</h2>
    <div className="">
      <Row className="d-flex justify-content-center">
        <Col lg={4} md={6} className="d-flex justify-content-center">
          <Card className = " bg-dark certificate-card mt-3 mb-3" style={{ width: '16rem', height: '31em' ,color: 'white', boxShadow: '0 4px 24px 0 rgba(180,200,255,0.35)',}}>
            <Card.Img variant="top" src="https://i.ibb.co/qLkrVXrx/1755605084434.jpg" />
            <Card.Body>
              <Card.Title 
                className="text-center"
                style={{ fontSize: '1.5rem', fontWeight: 'bold', height: '5rem' }}>
                FizzBozo Web Game
              </Card.Title>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <TechnologyTab skill="VueJS"/>
                <TechnologyTab skill="ASP.NET"/>
                <TechnologyTab skill="EFCore"/>
                <TechnologyTab skill="Docker"/>
              </div>

              <Card.Text className="mb-3" style={{height: '7.9rem'}}>
                FizzBuzz game created by Hoang Chau, 
                using technologies such as VueJs, EFCore, ASP.NET Core and Docker
              </Card.Text>
              <Button 
                variant="primary" 
                href="https://github.com/phucchau050303/FizzBozo"
                target="_blank" 
                rel="noopener noreferrer"
                className='ms-3 me-3 d-flex justify-content-center'
                style={{backgroundColor: '#3a889696', borderColor: '#3a889696'}}>
                View Code
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="d-flex justify-content-center">
          <Card className = "bg-dark mt-3 mb-3 certificate-card" style={{ width: '16rem',  height: '31em', color: 'white', boxShadow: '0 4px 24px 0 rgba(180,200,255,0.35)',}}>
            <Card.Img variant="top" src="https://i.ibb.co/GfQ2cmZ1/image.png" />
            <Card.Body>
              <Card.Title 
                className="text-center"
                style={{ fontSize: '1.5rem', fontWeight: 'bold', height: '5rem' }}>
                Student Assignments
              </Card.Title>
              <div className="d-flex justify-content-center mb-3">
                <TechnologyTab skill="C++"/>
                <TechnologyTab skill="Python"/>
                <TechnologyTab skill="C#"/>
                <TechnologyTab skill="React"/>
              </div>

              <Card.Text className="mb-3" style={{height: '7rem'}}>
                All of my assignments from university is here
              </Card.Text>
              <Button 
                variant="primary" 
                href="https://github.com/peter03x"
                target="_blank" 
                rel="noopener noreferrer"
                className='ms-3 me-3 d-flex justify-content-center'
                style={{backgroundColor: '#3a889696', borderColor: '#3a889696'}}>
                View Code
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="d-flex justify-content-center">
          <Card className = "bg-dark mt-3 mb-3 certificate-card" style={{ width: '16rem',  height: '31em', color: 'white', boxShadow: '0 4px 24px 0 rgba(180,200,255,0.35)',}}>
            <Card.Img variant="top" src="https://i.ibb.co/6c8TDZ6X/image.png" />
            <Card.Body>
              <Card.Title 
                className="text-center"
                style={{ fontSize: '1.5rem', fontWeight: 'bold', height: '5rem' }}>
                IELTS Practice Webiste
              </Card.Title>
              <div className="d-flex justify-content-center mb-3">
                <TechnologyTab skill="Nest.js"/>
                <TechnologyTab skill="Jest"/>
              </div>

              <Card.Text className="mb-3" style={{height: '7rem'}}>
                A commercial project to help users practice for the IELTS exam. 
                Contributed to JungTalents Team as a tester
              </Card.Text>
              <Button 
                variant="primary" 
                href="https://www.nhanvaneducation.com/"
                target="_blank" 
                rel="noopener noreferrer"
                className='ms-3 me-3 d-flex justify-content-center'
                style={{backgroundColor: '#3a889696', borderColor: '#3a889696'}}>
                View Live App
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>


  </section>
);

export default Projects;
