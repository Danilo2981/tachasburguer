import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'

import burgerClassic from '../assets/burguer-classic.jpg';
import burgerBBQ from '../assets/burguer-bbq.jpg';
import burgerVeggie from '../assets/burguer-veggie.jpg';
import burgerJalapeno from '../assets/burguer-jalapeno.jpg';
import burgerBlueCheese from '../assets/burguer-blue-cheese.jpg';
import potatosFrench from '../assets/potatos.jpg';

const menuItems = [
  { name: 'Hamburguesa Clásica', price: '$5.99', description: 'Carne de res, lechuga, tomate, queso y salsa especial.', image: burgerClassic },
  { name: 'Hamburguesa BBQ', price: '$6.99', description: 'Carne de res, tocino, queso cheddar, cebolla caramelizada y salsa BBQ.', image: burgerBBQ },
  { name: 'Hamburguesa Vegetariana', price: '$7.99', description: 'Hamburguesa de quinoa, lechuga, tomate, aguacate y salsa de yogur.', image: burgerVeggie },
  { name: 'Hamburguesa con Jalapeños', price: '$6.99', description: 'Carne de res, queso pepper jack, jalapeños y salsa picante.', image: burgerJalapeno },
  { name: 'Hamburguesa con Queso Azul', price: '$6.99', description: 'Carne de res, queso azul, lechuga, tomate y salsa especial.', image: burgerBlueCheese },
  { name: 'Papas Francesas y Bebidas', price: '$0.00', description: 'Todas las ordenes se acompañan con papas y bebidas de elección.', image: potatosFrench },
];

const Menu = () => {
    const [counters, setCounters] = useState(new Array(menuItems.length).fill(0));
  
    const handleCounter = (index) => {
      const newCounters = [...counters];
      newCounters[index] += 1;
      setCounters(newCounters);
    }

    const handleDecrement = (index) => {
      const newCounters = [...counters];
      newCounters[index] -= 1; // disminuye en una unidad
      if (newCounters[index] < 0) {
        newCounters[index] = 0; // no permitir números negativos
      }
      setCounters(newCounters);
    }
    
  
    return (
      <Container>
        <Row>
          {menuItems.map((item, index) => (
            <Col key={index} lg={4} style={{ marginTop: '2rem' }}>
              <Card className="h-100">
                <Card.Img variant="top" src={item.image} style={{ objectFit: "cover", height: "200px" }} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className="text-truncate">{item.description}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="font-weight-bold mb-0">{item.price}</h5>
                    <div className="d-flex align-items-center">
                      <span>¡Ordena ya!</span>  
                      <button onClick={() => handleDecrement(index)} className="btn btn-outline-secondary mx-1">-</button>
                      <span>{counters[index]}</span>
                      <button onClick={() => handleCounter(index)} className="btn btn-outline-secondary mx-1">+</button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

export default Menu;
