import React from 'react';

function Footer(props) {
  const estiloFooter = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2rem',
    marginTop: '2rem',
    textAlign: 'center',
    fontSize: '1.2rem',
  };

  const estiloEnlaces = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  };

  return (
    <footer style={estiloFooter}>
      <p>
        ¡Gracias por visitar nuestro restaurante de hamburguesas! Si tienes alguna
        pregunta o comentario, no dudes en contactarnos.
      </p>
      <p>
        Dirección: {props.direccion}<br />
        Teléfono: {props.telefono}<br />
        Correo electrónico: {props.email}<br />
        Síguenos en: 
        <a href={props.instagram} style={estiloEnlaces}>Instagram</a> | 
        <a href={props.facebook} style={estiloEnlaces}>Facebook</a>
      </p>
    </footer>
  );
}



export default Footer;