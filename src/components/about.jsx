import React from 'react';
import { Row, Col} from 'react-bootstrap';

function AboutUs() {
  return (
    <Col id="sobre-nosotros">
        <Row style={{ padding: "30px"}}>
            <Col className='banner'>
                <Row>
                <Col className='text'>
                    <h1>Bienvenidos a nuestro restaurante de hamburguesas</h1>
                    <p>
                    Somos un restaurante de hamburguesas de alta calidad, utilizando
                    ingredientes frescos y locales. Ofrecemos una variedad de
                    hamburguesas, papas fritas, aros de cebolla, bebidas y postres.
                    </p>
                </Col>
                </Row>
            </Col>
            <Col className='history'>
                <Row>
                    <h1>Nuestra Historia</h1>
                    <p>David siempre había sido un apasionado de las hamburguesas, por lo que decidió abrir su propio restaurante en el centro de la ciudad. Desde el principio, sus hamburguesas eran un éxito rotundo. Con el tiempo, David adoptó a un cachorro al que llamó Tacha. El pequeño peludo se enamoró de las hamburguesas de David y solía robarlas directamente de la cocina.</p>
                    <p>David pronto descubrió que Tacho podía ser un gran atractivo para su restaurante. Así que empezó a llevar a Tacha al restaurante, y los clientes se enamoraron de él. Tacha solía pasear por las mesas y recibir caricias y golosinas de los clientes, lo que hacía que la experiencia de comer hamburguesas en el restaurante fuera aún más agradable.</p>
                    <p>Con el tiempo, Tacha se convirtió en la mascota oficial del restaurante, y David decidió incluirlo en el nombre del local: Tacha's Burgers. Los clientes se volvieron leales al restaurante de David gracias al carisma de Tacha, convirtiendo al pequeño peludo en una estrella de las redes sociales y en un embajador del amor por las hamburguesas.</p>
                </Row>
            </Col>
        </Row>
    </Col>
  );
}

export default AboutUs;