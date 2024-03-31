
import styled from "styled-components";
import MenuLateral from "../MenuLateral";
import Calendar from "../calendar";

const ContainerAdmim = styled.div`
  .organiza{

  }
`

const Adminstracao = () => {

  return (
    <ContainerAdmim>
      <MenuLateral/>

      <div className="organiza">
        <Calendar/>

      </div>
    </ContainerAdmim>
  );
};

export default Adminstracao;
