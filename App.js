import React from 'react';
import Contacto from './Contacto';

function App() {
  const contacto = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan.perez@example.com',
    conectado: true,
  };

  return (
    <div className="App">
      <Contacto {...contacto} />
    </div>
  );
}

export default App;