import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CertificateCard from '../components/CertificateCard';

const Certificate = () => (
  <section id="certificate" className="mb-5 mt-5">
    <p className='mb-3 text-center' style={{fontSize: '2.3rem', fontWeight: 'bold'}}>Certificate</p>
    <Row className="mb-4 ">
        <Col md={4} className=" mb-5 mt-5">
            <CertificateCard
                link="https://www.dropbox.com/scl/fi/3tnzzitczwzxiv3udop98/Swinburne-Career-Development.jpeg?rlkey=7vj6z7azjuxa7g6bnazday6mo&st=h5x3n8rs&dl=0"
                issuer="Swinburne University of Technology"
                imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIWBVdlTIeSHaB725y9_Xpco4YN9sAxg7Rw&s"
                certificateName="Career Development Certificate"
            />
        </Col>
        <Col md={4} className="mb-5 mt-5">
            <CertificateCard 
                link="https://www.hackerrank.com/certificates/1e1d6a4f9ef1"
                issuer="Hackerrank"
                imageLink="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
                certificateName="C# Basic Certificate"
            />
        </Col>
        <Col md={4} className="mb-5 mt-5">
            <CertificateCard 
                link="https://www.hackerrank.com/certificates/1e1d6a4f9ef1"
                issuer="Hackerrank"
                imageLink="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
                certificateName="React Basic Certificate"
            />
        </Col>
    </Row>
  </section>
);

export default Certificate;
