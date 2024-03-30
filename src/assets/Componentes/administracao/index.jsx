import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendario from "../calendario";
import Lista from "../lista";
import { Link } from "react-router-dom";
import MenuLateral from "../MenuLateral";


const ContainerAdmim = styled.div`
  .organiza{

  }
`

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



const Adminstracao = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ContainerAdmim>
      {isSmallScreen ? (
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

          <Link to="/">
            <li>Proximo a vencer</li>
          </Link>
        </ul>
      </Nav>
      ) : (
        <MenuLateral/>
        
      )}

      <div className="organiza">
        <Calendario />
        <Lista />
      </div>
    </ContainerAdmim>
  );
};

export default Adminstracao;
