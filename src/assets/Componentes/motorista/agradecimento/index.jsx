import styled from "styled-components";
import logo from '/public/imagens/logo.png'
import Botao from "../../botao";
const ContainerAgradecimento = styled.div`

.card {
  width: 350px;
  background-color: #fff;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  position: absolute;
  top: 10%;
  left: 40%;

  @media (max-width: 600px) {
    width: 96vw;
    height: 90vh;
    top: 5%;
    left: 2%;
  }

}
`


const Agradecimento = () => {
    return(
        <ContainerAgradecimento>
            <div className="card">
                
              <h1>Check-list agendado com sucesso. Obrigada!</h1>
              <img src={logo} alt="logo" />
            <Botao to='/' texto="Voltar"/>
            </div>
        </ContainerAgradecimento>
    )
}

export default Agradecimento;