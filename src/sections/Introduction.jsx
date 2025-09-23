import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import GradientButton from '../components/GradientButton';
const Introduction = () => (
  <Container id="about" className="mb-5 fs-5">
    <Row className="align-items-center mb-5">
        <Col md={6} className="text-center mb-5 mt-5">
            <Image
            src="https://i.ibb.co/4RkzXM1C/Avatar2.jpg"
            className="rounded-circle"
            roundedCircle
            fluid
            alt="Profile"
            style={{
                width: '270px',
                height: '270px',
                objectFit: 'cover',
                objectPosition: 'center 40%',
                boxShadow: '0 4px 24px 0 rgba(180,200,255,0.35)'
            }}
            />
        </Col>
        <Col md={6} className="text-md-start text-sm-center"> 
            <span className='mb-3' style={{fontSize: '3rem', fontWeight: 'bold'}}>Hi, I'm <br/> Peter Hoang Chau</span>
            <h4 className='mb-3'>Welcome to my page!</h4>
            <p>
                I am a young Software Engineer with hands-on experience in full-stack development. 
                I'm passionate about developing, building applications and leveraging my skills to 
                contribute to innovative projects and make a positive impact in the tech industry.
            </p>
        </Col>
        
    </Row>

    <div className="text-center mt-5">
        <GradientButton href="https://drive.google.com/file/d/1X4k1YHk3jv5jvUu0F7c3F2Jt8K5Zl5hG/view?usp=sharing">
            Download My Resume
        </GradientButton>
    </div>



  </Container>
);

export default Introduction;
