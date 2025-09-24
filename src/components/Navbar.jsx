import React from 'react';
import { Navbar, Nav, Container, NavLink } from 'react-bootstrap';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'certificate', label: 'Certificate' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const CustomNavbar = () => (
  <Navbar variant="dark" expand="lg" sticky="top" className='fs-5'>
    <Container>
      <Navbar.Brand className='fs-3' href="#about">Peter Hoang Chau</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar-nav" />
      <Navbar.Collapse id="main-navbar-nav ">
        <Nav className="m-auto justify-content-center">
          {navItems.map(item => (
            <Nav.Link
              key={item.id}
              href={`#${item.id}`}
              onClick={e => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
        <Nav className='d-flex align-items-end-md'>
          <NavLink href="https://github.com/phucchau050303" target="_blank" rel="noopener noreferrer">Personal GitHub</NavLink>
        </Nav>  
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
