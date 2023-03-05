import { useState, useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import NavBar from './components/navbar';
import CarouselHamburgers from './components/carousel';
import AboutUs from './components/about';
import MenuTachas from './components/menu';
import Footer from './components/footer';
import { 
  onSnapshot,
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc
} from "firebase/firestore";
import { db } from './firebase.js';
import './App.css';

function App() {
  const [orders, setOrders] = useState([])
 
  const getData = () => {
    const arrData = []
    onSnapshot(collection(db, 'orders'), (snapshot) => {
      snapshot.docs.forEach((item) => {
        console.log(item.data())
        arrData.push({
          ...item.data(),
          id: item.id
        })
        console.log(arrData)
        setOrders(arrData)
      })
    })
  }
  
  useEffect(() => {
    getData()  
  }, []);

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
