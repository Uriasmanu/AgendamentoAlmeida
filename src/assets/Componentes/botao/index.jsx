import styled from "styled-components";
import { Link } from "react-router-dom";

const Botoes = styled.button`
    background: #43B50D;
    border: none;
    padding: 1%;
    color: white;
    font-weight: bold;
    width: 20rem;
    height: 50px;
    border-radius: 25px;

    &:hover{
        background: #0d2104;
        cursor: pointer;
    }
`

const Botao = ({ texto, to, type }) => {
    return (
        <Link to={to}>
            <Botoes type={type} >
                {texto}
            </Botoes>
        </Link>
    )
}

export default Botao;