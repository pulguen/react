import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CambiarEstado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conectado: props.conectado,
    };
    this.cambiarEstado = this.cambiarEstado.bind(this);
  }

  cambiarEstado() {
    this.setState({ conectado: !this.state.conectado });
  }

  render() {
    return (
      <div>
        <button onClick={this.cambiarEstado}>
          {this.state.conectado ? 'Desconectar' : 'Conectar'}
        </button>
        <p>{this.state.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
      </div>
    );
  }
}

CambiarEstado.propTypes = {
  conectado: PropTypes.bool.isRequired,
};

export default CambiarEstado;