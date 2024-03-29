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
        navigate("/agradece");


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
      function isEqual(array1, array2) {
        // Verifica se o tamanho das listas é o mesmo
        if (array1.length !== array2.length) {
            return false;
        }
    
        // Compara os elementos individualmente
        for (let i = 0; i < array1.length; i++) {
            // Compara as propriedades de cada objeto
            for (let key in array1[i]) {
                if (array1[i][key] !== array2[i][key]) {
                    return false;
                }
            }
        }
    
        return true;
    }
    useEffect(() => {
      // Recupera a lista de veículos armazenada no localStorage
      const storedListaVeiculos = localStorage.getItem("listaVeiculos");
      if (storedListaVeiculos) {
          setListaVeiculos(JSON.parse(storedListaVeiculos));
      }
  }, []);

      useEffect(()=>{
        const novaListaOrdenada = [...listaVeiculos].sort((a,b) =>{
            const dataA = new Date(a.data + " " + a.hora);
            const dataB = new Date(b.data + " " + b.hora);
            
            return dataA - dataB;
        })

        if (!isEqual(novaListaOrdenada, listaVeiculos)) {
            setListaVeiculos(novaListaOrdenada);
            localStorage.setItem("listaVeiculos", JSON.stringify(novaListaOrdenada));

        }

        console.log(listaVeiculos)
      }, [listaVeiculos]);


  return (
    <MyContext.Provider value={{
        nome, placa, data, hora,
        handleNome, handlePlaca, handleData, handleHora, handleSubmit,
        listaVeiculos,
    }}>
      {children}
    </MyContext.Provider>
  );
}
