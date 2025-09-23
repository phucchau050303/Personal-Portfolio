import React from 'react';
import { Nav } from 'react-bootstrap';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const Footer = () => (
  <footer className="pt-5 pb-3 mt-5 "style={{ background: '#1c1d1dff' }}> 
    <div className="container text-center">
      <h5 className="fw-bold mb-3" style={{ color: '#608894ff' }}>Peter Hoang Chau</h5>
      <Nav activeKey={'#home'} className="mb-3 d-flex justify-content-center flex-wrap gap-3" >
        <Nav.Item>
            <Nav.Link style={{color: "#ffffffff"}} href="#home" onClick={e => { e.preventDefault(); scrollToSection('about'); }}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={{color: "#ffffffff"}} href="#about" onClick={e => { e.preventDefault(); scrollToSection('about'); }}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={{color: "#ffffffff"}} href="#skills" onClick={e => { e.preventDefault(); scrollToSection('skills'); }}>Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={{color: "#ffffffff"}} href="#experience" onClick={e => { e.preventDefault(); scrollToSection('experience'); }}>Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={{color: "#ffffffff"}} href="#projects" onClick={e => { e.preventDefault(); scrollToSection('projects'); }}>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={{color: "#ffffffff"}} href="#education" onClick={e => { e.preventDefault(); scrollToSection('education'); }}>Education</Nav.Link>
        </Nav.Item> 
      </Nav>
      <Nav className="mb-3 d-flex justify-content-center gap-4">
        <Nav.Item>
            <Nav.Link style={{color: "#ffffffff"}} href="mailto:chauhoangbaophuc2003@gmail.com"  aria-label="Email">
            <i className="bi bi-envelope" style={{ fontSize: '1.5rem' }}></i>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={{color: "#ffffffff"}} href="tel:0416570437"  aria-label="Phone">
            <i className="bi bi-telephone" style={{ fontSize: '1.5rem' }}></i>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link style={{color: "#ffffffff"}} href="https://www.linkedin.com/in/peter-hoang-chau/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
            </Nav.Link>
        </Nav.Item>
      </Nav>
      <div style={{ fontSize: '1rem', color: '#ffffffff' }}>
        © 2025 Peter Hoang Chau. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
