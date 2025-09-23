import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomNavbar from './components/Navbar'
import Container from 'react-bootstrap/Container';
import Certificate from './sections/Certificate'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Introduction from './sections/Introduction'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Volunteering from './sections/Volunteering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CustomNavbar />
      <Container className = "bg-dark" style={{ colorScheme: 'light dark', color: 'rgba(255, 255, 255, 0.87)'}}>
        <Introduction />
        <Certificate />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </Container>
    </div>
  );
}

export default App
