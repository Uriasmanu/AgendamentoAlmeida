import styled from "styled-components";
import Calendario from "../calendario";

const Nav = styled.nav`
    ul{
        display: flex;
        list-style: none;
        width: 40%;
        justify-content: space-between;
        cursor: pointer;
        font-size: 120%;
        gap: 10%;
    }
`

const Adminstracao = ( ) =>{
    return(
        <>
        <Nav>
            <ul>
                <li>Frota</li>
                <li>Agenda</li>
                <li>Cancelados</li>
                <li>Proximo a vencer</li>
            </ul>
        </Nav>
           <Calendario/>

        </>
    )
}

export default Adminstracao;