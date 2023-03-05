import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
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
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const handleCounter = (index, value) => {
    const newCounters = [...counters];
    newCounters[index] += value;
    setCounters(newCounters);
  
    const item = { ...menuItems[index], quantity: newCounters[index] };
    const existingItemIndex = cartItems.findIndex((i) => i.name === item.name);
  
    if (existingItemIndex >= 0) {
      cartItems.splice(existingItemIndex, 1, item);
    } else {
      cartItems.push(item);
    }
  };
  

  let cartItems = [];

  const handleCart = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price.replace('$', '') * item.quantity, 0);
    setCartTotal(totalPrice);
    setShowCart(true);
  };

  const handleHideCart = () => {
    setShowCart(false);
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
                  <Card.Text>{item.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="font-weight-bold mt-2">{item.price}</Card.Text>
                    <div>
                      <span>¡Ordena ya!</span>
                      <button onClick={() => handleCounter(index, -1)} className="btn btn-outline-secondary mx-1" disabled={counters[index] === 0}>-</button>
                      <span>{counters[index]}</span>
                      <button onClick={() => handleCounter(index, 1)} className="btn btn-outline-secondary mx-1">+</button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mb-3 mt-3">
        <Col>
          <button className="btn btn-primary" onClick={() => {
            const order = menuItems.map((item, index) => {
              return {
                name: item.name,
                quantity: counters[index],
                price: item.price,
                total: item.price.slice(1) * counters[index] // calcula la multiplicacion
              }
            })
            console.log(order);
            handleCart();
          }}>Crear Pedido</button>
          {/* <button onClick={handleCart} className="btn btn-danger">
            <FaShoppingCart className="mr-2" />
            Ver carrito
          </button> */}
        </Col>
      </Row>
      {showCart && (
      <Row className="carrito mx-auto">
        <Col>
          <h2>Carrito de compras</h2>
          <button className="close-cart btn btn-primary pt-1 mb-3" onClick={handleHideCart}>
            <span className="sr-only">Cerrar</span>
            <span aria-hidden="true">&times;</span>
          </button>
          <ul className="list-group mb-3">
            {menuItems.map((item, index) => {
              if (counters[index] === 0) return null;
              const totalPrice = item.price.replace('$', '') * counters[index];
              return (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name} ({counters[index]})
                  <span>
                    {item.price} x {counters[index]} = {totalPrice}
                  </span>
                </li>
              );
            })}
            <li className="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
              Total:
              <span className="badge badge-primary badge-pill">{parseFloat(cartTotal).toFixed(2)}</span>
            </li>
          </ul>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Número de teléfono</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <button type="submit" className="btn btn-success btn-block mt-3">Enviar pedido</button>
          </form>
        </Col>  
      </Row>
      )}  
    </Container>
  );
};

export default Menu;


