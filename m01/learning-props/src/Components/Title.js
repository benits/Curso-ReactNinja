'use strict'
import React from 'react'

//  Criando um Componente através de
//  Função Pura - Arrow Function(ES6);
const Title = ({ name, lastName }) => <h1>Olá {`${name} ${lastName}`}!!!</h1>
Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'sem sobrenome'
}
//  Criando um Componente através de
//  React.createClass();
/*
const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastName: 'sem Sobrenome'
    }
  },
  render: function () {
    return (
    <h1>Olá {this.props.name + ' ' + this.props.lastName}!</h1>
    )
  }
})
*/
export default Title
