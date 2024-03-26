import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Componentes/home";
import EstilosGlobais from "./assets/Componentes/estilosGlobais";


function App() {
  return (
    <BrowserRouter>
    <EstilosGlobais/>
    <Routes>
         <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
