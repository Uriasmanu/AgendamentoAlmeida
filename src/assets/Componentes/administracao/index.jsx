import React, { useState } from "react";
import styled from "styled-components";
import Calendario from "../calendario";

import menu from '/public/imagens/menu.svg';
import close from '/public/imagens/fechar.svg';



const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-100vw")}; /* Esconde o menu lateral por padrão */
  width: 100vw;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  z-index: 999;

  ul {
    padding: 20px;
    list-style: none;
    font-size: 120%;
    gap: 10%;

    li {
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    left: ${(props) => (props.isOpen ? "0" : "-100vw")}; /* Altera a posição do menu lateral */

    ul {
        padding: 20px;
    list-style: none;
    font-size: 120%;
    gap: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 22vh;
    position: relative;
    top: 5%;

  }
}
`;

const ToggleButton = styled.img`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 1000;
  width: 30px;
`;

const Adminstracao = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Nav isOpen={isMenuOpen}>
        <ul>
          <li>Frota</li>
          <li>Agenda</li>
          <li>Cancelados</li>
          <li>Proximo a vencer</li>
        </ul>
      </Nav>
      <ToggleButton
        src={isMenuOpen ? close : menu}
        alt={isMenuOpen ? "Fechar" : "Menu"}
        onClick={toggleMenu}
      />
      <Calendario />
    </>
  );
};

export default Adminstracao;
