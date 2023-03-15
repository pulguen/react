import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CambiarEstado from './CambiarEstado';

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre,
      apellido: props.apellido,
      email: props.email,
      conectado: props.conectado,
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.nombre} {this.state.apellido}</h2>
        <p>Email: {this.state.email}</p>
        <p>Conectado: {this.state.conectado ? 'Conectado' : 'Desconectado'}</p>
        <CambiarEstado conectado={this.state.conectado} />
      </div>
    );
  }
}

Contacto.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  conectado: PropTypes.bool.isRequired,
};

export default Contacto;