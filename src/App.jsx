import { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import NavBar from './components/navbar';
import CarouselHamburgers from './components/carousel';
import AboutUs from './components/about';
import MenuTachas from './components/menu';
import Footer from './components/footer';
import './App.css'
import Menu from './components/menu';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <NavBar />

      <Container>
        <Row>
          <Col>
            <CarouselHamburgers />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <AboutUs />
        </Row>
        
        <Row id='menu-tachas'>
          <Col className='title-menu'>
            <h2>NUESTRO MENÚ</h2>
          </Col>
          <MenuTachas />
        </Row>
      </Container>

      <Footer 
        direccion="Av. Principal, Quito, Ecuador" 
        telefono="555-555-5555" 
        email="info@hamburguesas.com" 
        instagram="https://www.instagram.com/hamburguesas_ec/" 
        facebook="https://www.facebook.com/hamburguesas.ec/"
      />
    </>
  )
}

export default App
