import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [nome, setNome] = useState("");
  const [placa, setPlaca] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [listaVeiculos, setListaVeiculos] = useState([]);
  const navigate = useNavigate();

  const handleNome = (event) => {
    setNome(event.target.value);
  };

  const handlePlaca = (event) => {
    const inputPlaca = event.target.value;
    if (inputPlaca.length <= 7) {
      setPlaca(inputPlaca.toUpperCase());
    }
  };

  const handleData = (event) => {
    setData(event.target.value);
  };

  const handleHora = (event) => {
    setHora(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/agradece");

    const novoChecklist = {
      title: nome,
      start: `${data}T${hora}:00`,
      backgroundColor: "green",
      borderColor: "green",
    };

    setListaVeiculos([...listaVeiculos, novoChecklist]);

    setNome("");
    setPlaca("");
    setData("");
    setHora("");
  };

  useEffect(() => {
    // Recupera a lista de veículos armazenada no localStorage
    const storedListaVeiculos = localStorage.getItem("listaVeiculos");
    if (storedListaVeiculos) {
      setListaVeiculos(JSON.parse(storedListaVeiculos));
    }
  }, []);

  useEffect(() => {
    // Armazena a lista de veículos no localStorage sempre que houver uma alteração
    localStorage.setItem("listaVeiculos", JSON.stringify(listaVeiculos));
    console.log(listaVeiculos)
  }, [listaVeiculos]);

  return (
    <MyContext.Provider
      value={{
        nome,
        placa,
        data,
        hora,
        handleNome,
        handlePlaca,
        handleData,
        handleHora,
        handleSubmit,
        listaVeiculos,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
