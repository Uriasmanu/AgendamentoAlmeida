import styled from "styled-components";
import ItemDaLista from "../intemDaLista";
import { useContext } from "react";
import { MyContext } from "../../context";

const ContainerLista = styled.div`
.card {
  width: 40vw;
  height: auto;
  background-color: #fff;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: #757474;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  position: absolute;
  top: 20%;
  right: 5%;

  .lista{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
  }


  @media (max-width: 600px) {
    width: 96vw;
    position: absolute;
    top: 60%;
    right: 0%;
  }
}
`

const Lista = () => {
    const {listaVeiculos, dia} = useContext(MyContext);

    return (
        <ContainerLista>
            <div className="card">
                <h2>Lista de Check-list do dia {dia}</h2>

                <div className="lista">
                    {listaVeiculos.map((veiculo, index) => (
                        <ItemDaLista
                            key={index} 
                            placa={veiculo.placa}
                            nome={veiculo.nome}
                            hora={veiculo.hora}
                        />
                    ))}

                </div>
            </div>
        </ContainerLista>
    )
}

export default Lista; 