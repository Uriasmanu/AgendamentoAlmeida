import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export function MyProvider({ children }) {
    const [nome, setNome] = useState("");
    const [placa, setPlaca] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [listaVeiculos, setListaVeiculos] = useState([]);

    const handleNome = (event) =>{
        setNome(event.target.value); 
     }
 
     const handlePlaca = (event) =>{
         setPlaca(event.target.value); 
      }
 
      const handleData = (event) =>{
         setData(event.target.value); 
      }
 
      const handleHora = (event) =>{
         setHora(event.target.value); 
      }

      const handleSubmit = (event) =>{
        event.preventDefault();

        const novoChecklist = {
            id: placa,
            nome: nome,
            placa: placa,
            data: data,
            hora: hora,
        };

        setListaVeiculos([...listaVeiculos, novoChecklist])

        setNome("");
        setPlaca("");
        setData("");
        setHora("");

      }

      useEffect(()=>{
        console.log(listaVeiculos);
      }, [listaVeiculos]);

  return (
    <MyContext.Provider value={{
        nome, placa, data, hora,
        handleNome, handlePlaca, handleData, handleHora, handleSubmit,
        listaVeiculos
    }}>
      {children}
    </MyContext.Provider>
  );
}
