// Funções 
import React from 'react';

// Navegação
import { useRouteError } from "react-router-dom";

export default function Actor() {
  const error:any = useRouteError();

  return (
    <div id="App-content">
      <h1>Lista de Atores!</h1>
      <p>Desculpa, ocorreu algum erro na página.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}