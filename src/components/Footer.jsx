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
      <Nav activeKey={'#home'} className="mb-3 d-flex justify-content-center flex-wrap gap-3" style={{color: "white"}}>
        <Nav.Item>
            <Nav.Link href="#home" onClick={e => { e.preventDefault(); scrollToSection('about'); }}>Home</Nav.Link>
        </Nav.Item>
        <a href="#about" className="footer-link">About</a>
        <a href="#skills" className="footer-link">Skills</a>
        <a href="#experience" className="footer-link">Experience</a>
        <a href="#projects" className="footer-link">Projects</a>
        <a href="#education" className="footer-link">Education</a>
      </Nav>
      <div className="mb-3 d-flex justify-content-center gap-4">
        <a href="mailto:chauhoangbaophuc2003@gmail.com" className="footer-icon" aria-label="Email">
          <i className="bi bi-envelope" style={{ fontSize: '1.5rem' }}></i>
        </a>
        <a href="tel:0416570437" className="footer-icon" aria-label="Phone">
          <i className="bi bi-telephone" style={{ fontSize: '1.5rem' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/peter-hoang-chau/" className="footer-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
        </a>
      </div>
      <div style={{ fontSize: '1rem', color: '#ffffffff' }}>
        © 2025 Peter Hoang Chau. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
