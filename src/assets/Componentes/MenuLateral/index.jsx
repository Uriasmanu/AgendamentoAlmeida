import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import menu from '/public/imagens/menu.svg';
import close from '/public/imagens/fechar.svg';

const ContainerMenu = styled.div`



`;

const Nav1 = styled.nav`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-100vw")};
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

      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 600px) {
    left: ${(props) => (props.isOpen ? "0" : "-100vw")};

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

const Nav = styled.nav`
  position: fixed;
  top: 0;
  padding-left: 5%;
  width: 100vw;
  height: 10%;
  background-color: #04a756;


  ul {
    padding: 20px;
    list-style: none;
    font-size: 120%;
    gap: 10%;
    display: flex;

    li {
      cursor: pointer;
      color: #fff;

      a{
        text-decoration: none;
      }
    }
  }
`;

const MenuLateral = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ContainerMenu>
      {isSmallScreen ? (
        <>
      <Nav1 isOpen={isMenuOpen}>
      <ul>
        <Link to="/">
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
      </ul>
    </Nav1>
    <ToggleButton
        src={isMenuOpen ? close : menu}
        alt={isMenuOpen ? "Fechar" : "Menu"}
        onClick={toggleMenu}
      />
    </>
      ) : (
        
        <Nav>
        <ul>
          <Link to="/">
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
        </ul>
      </Nav>
      )}
      
    </ContainerMenu>
  );
};

export default MenuLateral;
