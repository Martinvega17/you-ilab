import React from 'react'
import styled from 'styled-components'

function BurguerButton(props) {
  return (
    <Burguer>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  )
}

export default BurguerButton

const Burguer = styled.div`
  position: absolute;
  top: 10px; /* Ajusta la posición vertical según tus necesidades */
  right: 10px; /* Ajusta la posición horizontal según tus necesidades */

  /* Estilos para el botón */
  .icon {
    width: 35px;
    height: 30px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }

  .icon span {
    background-color: #fff;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }

  .icon span:nth-child(1) {
    top: 0px;
    left: 0px;
  }

  .icon span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
  }

  .icon span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }

  .icon:not(.open):hover span:nth-child(1) {
    transform: rotate(-3deg) scaleY(1.1);
  }

  .icon:not(.open):hover span:nth-child(2) {
    transform: rotate(3deg) scaleY(1.1);
  }

  .icon:not(.open):hover span:nth-child(3) {
    transform: rotate(-4deg) scaleY(1.1);
  }

  .icon.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }

  .icon.open span:nth-child(2) {
    opacity: 0;
  }

  .icon.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;
