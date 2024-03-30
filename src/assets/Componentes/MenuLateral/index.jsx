import React, { useState } from "react";
import styled from "styled-components";
import menu from '/public/imagens/menu.svg';
import close from '/public/imagens/fechar.svg';
import { Link } from "react-router-dom";

const ContainerMenu = styled.div`
  .organiza{

  }
`

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
    display: flex;

    li {
      cursor: pointer;
      color: #757474;

      a{
        text-decoration: none;

      }

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

const MenuLateral = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ContainerMenu>
      <Nav isOpen={isMenuOpen}>
        <ul>
          <Link to="/" >
            <li>Inicio</li>
          </Link>

          <Link to="/">
            <li>Frota</li>
          </Link>

          <Link to="/administracao">
            <li>Agenda</li>
          </Link>

          <Link to="/">
            <li>Cancelados</li>
          </Link>

          <Link to="/">
            <li>Proximo a vencer</li>
          </Link>

        </ul>
      </Nav>
      <ToggleButton
        src={isMenuOpen ? close : menu}
        alt={isMenuOpen ? "Fechar" : "Menu"}
        onClick={toggleMenu}
      />
    </ContainerMenu>
  );
};

export default MenuLateral;
