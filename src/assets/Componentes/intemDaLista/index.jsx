import styled from "styled-components";

import close from '/public/imagens/fechar.svg';
import certo from '/public/imagens/done.svg';
import { useContext } from "react";
import { MyContext } from "../../context";

const ContainerItens = styled.div`
.info {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #509AF8;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  box-sizing: border-box;
}


.info__icon path {
  fill: #fff;
}

.info__title {
    width: 80%;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: space-between;
}

button{
    background: none;
    border: none;
    cursor: pointer;

}

.icones {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-left: 4%;
}

@media (max-width: 600px) {
    .info__title {
    width: 71%;
    }
}

`

const ItemDaLista = ({ placa, nome, hora }) => {

    return (
        <ContainerItens>

            <div class="info">
                <div class="info__icon">

                </div>
                <div class="info__title">
                    <p>{placa}</p>
                    <p>{nome}</p>
                    <p>{hora}</p>
                </div>
                <div class="icones">
                    <button><img src={certo} alt="icone de certo" /></button>

                    <button><img src={close} alt="icone de fechar" /></button>


                </div>
            </div>
        </ContainerItens>
    )
}
export default ItemDaLista;