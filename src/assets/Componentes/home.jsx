import Botao from './botao';
import logo from '/public/imagens/logo.png'
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #43B50D;
  height: 100vh;

  h1{
    margin: 0;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
  }
`
const Home = () => {
    return (
        <Container>
            <img src={logo} alt="logo" />
            <h1>Bem Vindo!</h1>
            <h2>Agende agora o check-list</h2>
            <div>
                <Botao texto="Motorista" to="/motorista" />
                <Botao texto="Administração" to="/administracao" />
            </div>

        </Container>
    )
}

export default Home; 