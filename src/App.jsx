import React from "react";
import {  Routes, Route } from "react-router-dom";


import EstilosGlobais from "./assets/Componentes/estilosGlobais";
import Motorista from "./assets/Componentes/motorista";
import Login from "./assets/Componentes/login";
import Adminstracao from "./assets/Componentes/administracao";
import { MyProvider } from "./assets/context";
import Home from "./assets/Componentes/home/home";
import Agradecimento from "./assets/Componentes/motorista/agradecimento";
import Cancelados from "./assets/Componentes/Frota/Cancelados/indesx";

function App() {
  return (

    <MyProvider>
        <EstilosGlobais/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/motorista' element={<Motorista/>}></Route>
          <Route path='/agradece' element={<Agradecimento/>}></Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/administracao' element={<Adminstracao/>}></Route>
          <Route path='/cancelados' element={<Cancelados/>}></Route>

        </Routes>
    </MyProvider>

  );
}

export default App;
