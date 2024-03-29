import React, { useState } from 'react';
import styled from 'styled-components';

import proximo from '/public/imagens/direita.svg';
import anterior from '/public/imagens/esquerda.svg';


const CalendarioContainer = styled.div`
    font-family: Arial, sans-serif;
    text-align: center;
    width: 630px;
    margin: 0 auto;
    position: absolute;
    left: 5%;
    top: 20%;

  .dias {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 630px;
    margin-left: 40px;

  }

  @media (max-width: 600px) {
    width: 90vw;
    left: 1%;
    top: 10%;

    .dias {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100vw;
    margin-left: 10px;
    }

    .line{
        width: 90vw;
        height: 3px;
        border: 1px solid #757474;
        position: absolute;
        left: 3%;
        margin-top: 5%;
    }
}
`;

const Cabecalho = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;

  button {
    background: none;
    border: none;
    color: #757474;

    img{
        width: 2rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  width: 90vw;

  h2{
    font-size: 1rem;
  }

  button {
    background: none;
    border: none;
    color: #757474;

    img{
        width: 1rem;
    }

    &:hover {
      cursor: pointer;
    }
  }
  }
  
`;

const DiaSemana = styled.div`
  display: flex;
  justify-content: center;
  width: 630px;
  gap: 26px;
  color: #757474;
  font-size: 2rem;
  margin-bottom: 1%;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    width: 95vw;
    gap: 23px;
    color: #757474;
    font-size: 1rem;
    margin-bottom: 1%;
  }
`;

const Dia = styled.div.attrs(props => ({
  iscurrentmonth: props.isCurrentMonth ? true : undefined
}))`
  box-sizing: border-box;
  width: 75px;
  height: 75px;
  line-height: 40px;
  margin: 2px;
  background-color: ${props => (props.isCurrentMonth ? 'white' : '#fffffffb')};
  color: ${props => (props.isCurrentMonth ? '#757474' : '#757474')};
  cursor: pointer;
  font-size: 2rem;
  display: flex;
    justify-content: center;
    align-items: center;
  &:hover {
    cursor: pointer;
    border: solid 0.5px #757474;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    width: 49px;
    height: 49px;
  }

`;

const Calendario = () => {
  const [dataAtual, setDataAtual] = useState(new Date());

  const proximoMes = () => {
    setDataAtual(prevData => {
      const proximoMesData = new Date(prevData.getFullYear(), prevData.getMonth() + 1, 1);
      return proximoMesData;
    });
  };

  const mesAnterior = () => {
    setDataAtual(prevData => {
      const mesAnteriorData = new Date(prevData.getFullYear(), prevData.getMonth() - 1, 1);
      return mesAnteriorData;
    });
  };

  const obterNomeMes = mes => {
    const nomesMeses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];
    return nomesMeses[mes];
  };

  const handleDiaClick = dia => {
    console.log(`Clicou no dia ${dia}`);
    // Faça algo com o dia clicado, se necessário
  };

  const renderizarCalendario = () => {
    const diasNoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate();
    const primeiroDiaSemana = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1).getDay();

    const dias = [];
    for (let i = 1; i <= diasNoMes; i++) {
      dias.push(i);
    }
    for (let i = 0; i < primeiroDiaSemana; i++) {
      dias.unshift(null);
    }

    return dias.map((dia, index) => (
      <Dia key={index} isCurrentMonth={dia !== null} onClick={() => handleDiaClick(dia)}>
        {dia}
      </Dia>
    ));
  };

  return (

    <CalendarioContainer>
      <Cabecalho>
        <button onClick={mesAnterior}>
          <img src={anterior} alt="" />
        </button>
        <h2>
          {obterNomeMes(dataAtual.getMonth())} {dataAtual.getFullYear()}
        </h2>
        <button onClick={proximoMes}>
          <img src={proximo} alt="" />
        </button>
      </Cabecalho>
      <DiaSemana>
        <div>Dom</div>
        <div>Seg</div>
        <div>Ter</div>
        <div>Qua</div>
        <div>Qui</div>
        <div>Sex</div>
        <div>Sab</div>
      </DiaSemana>
      <div className="dias">{renderizarCalendario()}</div>
      <div className='line' ></div>
    </CalendarioContainer>
   
  );
};

export default Calendario;
