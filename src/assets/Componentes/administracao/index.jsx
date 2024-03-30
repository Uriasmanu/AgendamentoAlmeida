import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendario from "../calendario";
import Lista from "../lista";
import MenuLateral from "../MenuLateral";

const ContainerAdmim = styled.div`
  .organiza{

  }
`

const Adminstracao = () => {

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
