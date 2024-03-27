import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Componentes/home";
import EstilosGlobais from "./assets/Componentes/estilosGlobais";
import Motorista from "./assets/Componentes/motorista";
import Login from "./assets/Componentes/login";


function App() {
  return (
    <BrowserRouter>
    <EstilosGlobais/>
    <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/motorista' element={<Motorista/>}></Route>
         <Route path='/administracao' element={<Login/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
