import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './CertificateCard.css';

const CertificateCard = ({ link, issuer, certificateName, imageLink }) => (
    <Card className="mb-3 certificate-card" 
        style={{ 
            maxWidth: '230px', 
            margin: '0 auto', 
            boxShadow: '0 4px 24px 0 rgba(180,200,255,0.35)', 
            backgroundColor: '#212529',
            color: 'white'
        }}>
        <Card.Img 
            variant="top" 
            className="rounded-circle mt-4 mb-1 mx-auto" 
            src={imageLink} alt={certificateName} 
            style={{maxWidth: "100px"}}/>
        <Card.Body>
            <Card.Title 
                style={{ fontSize: '1.5rem', fontWeight: 'bold', height: '5rem' }}
                className='text-center mb-2'>{certificateName}</Card.Title>
            <Card.Subtitle 
                style={{ height: '2rem' }}
                className="mb-3 mt-2 text-center">{issuer}</Card.Subtitle>
            <Button 
                variant="primary" 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className='ms-3 me-3 d-flex justify-content-center'
                style={{backgroundColor: '#3a889696', borderColor: '#3a889696'}}>
                View Certificate
            </Button>
        </Card.Body>
    </Card>
);

export default CertificateCard;