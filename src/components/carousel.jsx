import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'

function CarouselTacha() {
  return (
    <Carousel className='carousel'>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={c1}
            alt="First slide"
            style={{ objectFit: "cover" }}
        />
        <Carousel.Caption className='caption'>
            <h3>Deliciosas hamburguesas</h3>
            <p>Satisfacción garantizada en cada mordida.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={c2}
            alt="Second slide"
        />

        <Carousel.Caption className='caption'>
            <h3>¡Ven y prueba nuestras deliciosas hamburguesas!</h3>
            <p>En nuestro local podrás disfrutar de la mejor comida rápida, preparada con ingredientes frescos y de la más alta calidad. No te pierdas la oportunidad de probar nuestras hamburguesas únicas y deliciosas. ¡Te esperamos!</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={c3}
            alt="Third slide"
        />

        <Carousel.Caption className='caption'>
            <h3>Hamburguesas al carbón recién preparadas</h3>
            <p>
            Saborea la deliciosa combinación de carne a la parrilla y el sabor ahumado del carbón en cada mordisco. Ven y prueba nuestras hamburguesas al carbón hoy mismo.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTacha;