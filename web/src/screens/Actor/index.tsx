// Funções 
import React from 'react';

// Navegação
import { useRouteError } from "react-router-dom";

export default function Actor() {
  const error:any = useRouteError();

  return (
    <div id="App-content">
      <h1>Lista de Actores!</h1>
      <p>Em construção.</p>
      <p>
        <i>Página de Actores</i>
      </p>
    </div>
  );
}