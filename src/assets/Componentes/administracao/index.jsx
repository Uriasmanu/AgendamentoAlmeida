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
 <MenuLateral/>

      <div className="organiza">
        <Calendario />
        <Lista />
      </div>
    </ContainerAdmim>
  );
};

export default Adminstracao;
